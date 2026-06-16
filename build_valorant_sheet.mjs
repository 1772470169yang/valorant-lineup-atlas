import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outDir = "/private/tmp/valorant_sheet";

const readJson = async (file) => JSON.parse(await fs.readFile(file, "utf8"));

const agentsPayload = await readJson("/tmp/valorant_agents.json");
const mapsPayload = await readJson("/tmp/valorant_maps.json");

const publicCompetitiveMaps = new Set([
  "Abyss",
  "Ascent",
  "Bind",
  "Breeze",
  "Corrode",
  "Fracture",
  "Haven",
  "Icebox",
  "Lotus",
  "Pearl",
  "Split",
  "Sunset",
]);

const tdmMaps = new Set(["District", "Kasbah", "Piazza", "Drift", "Glitch"]);

function mapType(name) {
  if (publicCompetitiveMaps.has(name)) return "Standard / Spike";
  if (tdmMaps.has(name)) return "Team Deathmatch";
  if (name === "The Range" || name === "Basic Training") return "Training";
  if (name.startsWith("Skirmish")) return "Skirmish / Internal";
  return "Other";
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

const agents = agentsPayload.data
  .map((agent) => ({
    name: agent.displayName ?? "",
    role: agent.role?.displayName ?? "",
    roleDescription: agent.role?.description ?? "",
    abilities: (agent.abilities ?? [])
      .filter((ability) => ability.displayName)
      .map((ability) => `${ability.slot}: ${ability.displayName}`)
      .join("\n"),
    description: agent.description ?? "",
    uuid: agent.uuid ?? "",
    source: "valorant-api.com / v1/agents",
  }))
  .sort((a, b) => a.role.localeCompare(b.role) || a.name.localeCompare(b.name));

const maps = uniqueBy(mapsPayload.data, (map) => `${map.displayName}|${map.coordinates ?? ""}`)
  .map((map) => ({
    name: map.displayName ?? "",
    type: mapType(map.displayName ?? ""),
    coordinates: map.coordinates ?? "",
    tacticalDescription: map.tacticalDescription ?? "",
    listViewIcon: map.listViewIcon ? "Yes" : "No",
    splash: map.splash ? "Yes" : "No",
    uuid: map.uuid ?? "",
    source: "valorant-api.com / v1/maps",
  }))
  .sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));

const roleCounts = agents.reduce((acc, agent) => {
  acc[agent.role || "Unknown"] = (acc[agent.role || "Unknown"] ?? 0) + 1;
  return acc;
}, {});

const mapTypeCounts = maps.reduce((acc, map) => {
  acc[map.type] = (acc[map.type] ?? 0) + 1;
  return acc;
}, {});

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Summary");
const agentSheet = workbook.worksheets.add("Agents");
const mapSheet = workbook.worksheets.add("Maps");
const sourceSheet = workbook.worksheets.add("Sources");

function setValues(sheet, range, rows) {
  sheet.getRange(range).values = rows;
}

setValues(summary, "A1:D1", [["Section", "Metric", "Value", "Notes"]]);
const summaryRows = [
  ["Dataset", "Playable agents", agents.length, "Pulled from Valorant API playable-character endpoint"],
  ["Dataset", "Unique map records", maps.length, "Includes standard maps, training, TDM, and skirmish/internal records"],
  ["Lineup planning", "Recommended first focus", publicCompetitiveMaps.size, "Standard / Spike maps are most relevant for utility lineups"],
  ["Lineup planning", "High-value agent roles", "Initiator / Controller / Sentinel", "Most likely to need fixed utility lineups"],
  ...Object.entries(roleCounts).map(([role, count]) => ["Agent role count", role, count, ""]),
  ...Object.entries(mapTypeCounts).map(([type, count]) => ["Map type count", type, count, ""]),
];
setValues(summary, `A2:D${summaryRows.length + 1}`, summaryRows);

const agentRows = [
  ["Agent", "Role", "Role Description", "Abilities", "Description", "UUID", "Source"],
  ...agents.map((agent) => [
    agent.name,
    agent.role,
    agent.roleDescription,
    agent.abilities,
    agent.description,
    agent.uuid,
    agent.source,
  ]),
];
setValues(agentSheet, `A1:G${agentRows.length}`, agentRows);

const mapRows = [
  ["Map", "Map Type", "Coordinates", "Tactical Description", "Has List Icon", "Has Splash", "UUID", "Source"],
  ...maps.map((map) => [
    map.name,
    map.type,
    map.coordinates,
    map.tacticalDescription,
    map.listViewIcon,
    map.splash,
    map.uuid,
    map.source,
  ]),
];
setValues(mapSheet, `A1:H${mapRows.length}`, mapRows);

const sources = [
  ["Source", "URL", "Used For", "Notes"],
  ["Valorant API - Agents", "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=en-US", "Agent names, roles, descriptions, abilities", "Public community API; queried on 2026-06-16"],
  ["Valorant API - Maps", "https://valorant-api.com/v1/maps?language=en-US", "Map names, coordinates, tactical descriptions, icons", "Public community API; queried on 2026-06-16"],
  ["Official VALORANT Agents", "https://playvalorant.com/en-us/agents/", "Public cross-check reference", "Official Riot/VALORANT page"],
  ["Official VALORANT Maps", "https://playvalorant.com/en-us/maps/", "Public cross-check reference", "Official Riot/VALORANT page"],
];
setValues(sourceSheet, `A1:D${sources.length}`, sources);

const output = await SpreadsheetFile.exportXlsx(workbook);
await fs.mkdir(outDir, { recursive: true });
const outPath = path.join(outDir, "valorant_agents_maps.xlsx");
await output.save(outPath);
console.log(outPath);
