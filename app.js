const cards = [...document.querySelectorAll(".lineup-card")];
const title = document.querySelector(".lineup-summary h2");
const agentSelect = document.querySelector(".agent-select");
const agentAvatar = document.querySelector(".agent-avatar");
const agentAvatarImg = document.querySelector(".agent-avatar-img");
const stageEyebrow = document.querySelector(".stage-header .eyebrow");
const themeButtons = [...document.querySelectorAll(".theme-toggle button")];
const mapSelect = document.querySelector(".map-select");
const mapCount = document.querySelector(".map-count");
const sourceTabs = [...document.querySelectorAll(".source-tabs button")];
const mapFrame = document.querySelector(".map-frame");
const mapCanvas = document.querySelector(".map-canvas");
const rotateButton = document.querySelector(".rotate-map");
const zoomInButton = document.querySelector(".zoom-in");
const zoomOutButton = document.querySelector(".zoom-out");
const zoomLevel = document.querySelector(".zoom-level");
const sideTabs = [...document.querySelectorAll(".side-tabs button")];
const calloutToggle = document.querySelector(".toggle-callouts");
const utilityToggle = document.querySelector(".toggle-utility");
const mapImages = [...document.querySelectorAll(".map-art")];

const lineupCounts = {
  Ascent: 8,
  Bind: 6,
  Haven: 7,
  Split: 6,
  Lotus: 5,
  Sunset: 4,
  Icebox: 5,
  Pearl: 4,
  Fracture: 4,
  Breeze: 3,
  Abyss: 3,
  Corrode: 2,
};

const agentIcons = {
  Astra: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
  Breach: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
  Brimstone: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
  Chamber: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png",
  Clove: "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/displayicon.png",
  Cypher: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png",
  Deadlock: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png",
  Fade: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png",
  Gekko: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png",
  Harbor: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png",
  Iso: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/displayicon.png",
  Jett: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
  "KAY/O": "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png",
  Killjoy: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
  Miks: "https://media.valorant-api.com/agents/7c8a4701-4de6-9355-b254-e09bc2a34b72/displayicon.png",
  Neon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png",
  Omen: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png",
  Phoenix: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png",
  Raze: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
  Reyna: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png",
  Sage: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png",
  Skye: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
  Sova: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png",
  Tejo: "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/displayicon.png",
  Veto: "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/displayicon.png",
  Viper: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
  Vyse: "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/displayicon.png",
  Waylay: "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/displayicon.png",
  Yoru: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png",
};

let mapRotation = 0;
let mapScale = 1;
let mapPanX = 0;
let mapPanY = 0;
let dragStart = null;

const details = {
  "A Main Molly": {
    ability: "Snake Bite",
    side: "Attack",
    difficulty: "Easy",
    timing: "Throw after spike tap. Works from A Main without exposing to Heaven.",
  },
  "Mid Orb Cloud": {
    ability: "Poison Cloud",
    side: "Attack",
    difficulty: "Medium",
    timing: "Use before mid split. Pick up after crossing to keep the second smoke cycle.",
  },
  "B Lane Snake Bite": {
    ability: "Snake Bite",
    side: "Post",
    difficulty: "Easy",
    timing: "Throw on first defuse audio. Best when teammate holds Market swing.",
  },
  "Market Wall": {
    ability: "Toxic Screen",
    side: "Defense",
    difficulty: "Medium",
    timing: "Place before barrier drops. Creates a safe retake pocket around Market.",
  },
};

function setSelected(name) {
  cards.forEach((card) => card.classList.toggle("active", card.querySelector("strong")?.textContent === name));
  title.textContent = name;

  const data = details[name];
  if (!data) return;

  const meta = document.querySelectorAll(".meta-grid strong");
  meta[0].textContent = data.side;
  meta[1].textContent = data.ability;
  meta[2].textContent = data.difficulty;
  document.querySelector(".notes p").textContent = data.timing;
}

function selectedMapName() {
  return mapSelect?.value || "Ascent";
}

function selectedAgentName() {
  return agentSelect?.value || "Viper";
}

function updateStageEyebrow() {
  stageEyebrow.textContent = `${selectedMapName()} / ${selectedAgentName()}`;
}

function updateAgentAvatar(agentName) {
  if (!agentAvatarImg) return;
  agentAvatarImg.src = agentIcons[agentName] || agentIcons.Viper;
  agentAvatarImg.alt = `${agentName} agent icon`;
}

function applyMapTransform() {
  mapCanvas.style.setProperty("--map-rotation", `${mapRotation}deg`);
  mapCanvas.style.setProperty("--map-counter-rotation", `${-mapRotation}deg`);
  mapCanvas.style.setProperty("--map-scale", mapScale.toFixed(2));
  mapCanvas.style.setProperty("--map-marker-scale", (1 / mapScale).toFixed(3));
  mapCanvas.style.setProperty("--map-pan-x", `${Math.round(mapPanX)}px`);
  mapCanvas.style.setProperty("--map-pan-y", `${Math.round(mapPanY)}px`);
  zoomLevel.textContent = `${Math.round(mapScale * 100)}%`;
  mapFrame.classList.toggle("is-zoomed", mapScale > 1);
}

function clampPan() {
  if (mapScale <= 1) {
    mapPanX = 0;
    mapPanY = 0;
    return;
  }

  const frame = mapFrame.getBoundingClientRect();
  const canvas = mapCanvas.getBoundingClientRect();
  const maxX = Math.max(0, (canvas.width * (mapScale - 1)) / 2 + frame.width * 0.12);
  const maxY = Math.max(0, (canvas.height * (mapScale - 1)) / 2 + frame.height * 0.12);
  mapPanX = Math.max(-maxX, Math.min(maxX, mapPanX));
  mapPanY = Math.max(-maxY, Math.min(maxY, mapPanY));
}

cards.forEach((card) => {
  card.addEventListener("click", () => setSelected(card.querySelector("strong").textContent));
});

agentSelect?.addEventListener("change", () => {
  const agentName = agentSelect.value;
  agentAvatar.dataset.agent = agentName;
  updateAgentAvatar(agentName);
  updateStageEyebrow();
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeOption;
    document.body.dataset.theme = theme;
    themeButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

mapSelect?.addEventListener("change", () => {
  const name = selectedMapName();
  mapCount.textContent = `${lineupCounts[name] ?? 0} lineups`;
  updateStageEyebrow();
});

sourceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    sourceTabs.forEach((button) => button.classList.toggle("active", button === tab));
  });
});

sideTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    sideTabs.forEach((button) => button.classList.toggle("active", button === tab));
  });
});

calloutToggle?.addEventListener("change", () => {
  mapCanvas.classList.toggle("hide-callouts", !calloutToggle.checked);
});

utilityToggle?.addEventListener("change", () => {
  mapCanvas.classList.toggle("hide-utility", !utilityToggle.checked);
});

rotateButton?.addEventListener("click", () => {
  mapRotation = (mapRotation + 90) % 360;
  applyMapTransform();
});

zoomInButton?.addEventListener("click", () => {
  mapScale = Math.min(1.5, mapScale + 0.1);
  clampPan();
  applyMapTransform();
});

zoomOutButton?.addEventListener("click", () => {
  mapScale = Math.max(0.75, mapScale - 0.1);
  clampPan();
  applyMapTransform();
});

mapFrame?.addEventListener("pointerdown", (event) => {
  if (mapScale <= 1) return;
  if (event.target.closest(".map-control, .stage-actions button, select, input, label")) return;
  event.preventDefault();
  dragStart = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    panX: mapPanX,
    panY: mapPanY,
  };
  mapFrame.classList.add("is-dragging");
  mapFrame.setPointerCapture(event.pointerId);
});

mapFrame?.addEventListener("pointermove", (event) => {
  if (!dragStart || dragStart.pointerId !== event.pointerId) return;
  mapPanX = dragStart.panX + event.clientX - dragStart.x;
  mapPanY = dragStart.panY + event.clientY - dragStart.y;
  clampPan();
  applyMapTransform();
});

function endDrag(event) {
  if (!dragStart || dragStart.pointerId !== event.pointerId) return;
  dragStart = null;
  mapFrame.classList.remove("is-dragging");
  if (mapFrame.hasPointerCapture(event.pointerId)) {
    mapFrame.releasePointerCapture(event.pointerId);
  }
}

mapFrame?.addEventListener("pointerup", endDrag);
mapFrame?.addEventListener("pointercancel", endDrag);
mapImages.forEach((image) => {
  image.addEventListener("dragstart", (event) => event.preventDefault());
});

updateAgentAvatar(selectedAgentName());
applyMapTransform();
