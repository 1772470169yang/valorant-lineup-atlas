const title = document.querySelector(".lineup-summary h2");
const agentSelect = document.querySelector(".agent-select");
const agentAvatar = document.querySelector(".agent-avatar");
const agentAvatarImg = document.querySelector(".agent-avatar-img");
const stageEyebrow = document.querySelector(".stage-header .eyebrow");
const stageTitle = document.querySelector(".stage-header h1");
const themeButtons = [...document.querySelectorAll(".theme-toggle button")];
const languageSelect = document.querySelector(".language-select");
const mapSelect = document.querySelector(".map-select");
const sourceTabs = [...document.querySelectorAll(".source-tabs button")];
const appShell = document.querySelector(".app-shell");
const detailsPanel = document.querySelector(".details-panel");
const saveLineupButton = document.querySelector(".save-lineup-button");
const closeDetailsButton = document.querySelector(".close-details-button");
const mapFrame = document.querySelector(".map-frame");
const mapCanvas = document.querySelector(".map-canvas");
const mapLayer = document.querySelector(".rotating-map-layer");
const rotateButton = document.querySelector(".rotate-map");
const zoomInButton = document.querySelector(".zoom-in");
const zoomOutButton = document.querySelector(".zoom-out");
const zoomLevel = document.querySelector(".zoom-level");
const sideTabs = [...document.querySelectorAll(".side-tabs button")];
const calloutToggle = document.querySelector(".toggle-callouts");
const utilityToggle = document.querySelector(".toggle-utility");
const mapImages = [...document.querySelectorAll(".map-art")];

const mapOrder = ["Ascent", "Bind", "Haven", "Split", "Lotus", "Sunset", "Icebox", "Pearl", "Fracture", "Breeze", "Abyss", "Corrode"];
const agentOrder = [
  "Viper",
  "Astra",
  "Brimstone",
  "Clove",
  "Harbor",
  "Miks",
  "Omen",
  "Iso",
  "Jett",
  "Neon",
  "Phoenix",
  "Raze",
  "Reyna",
  "Waylay",
  "Yoru",
  "Breach",
  "Fade",
  "Gekko",
  "KAY/O",
  "Skye",
  "Sova",
  "Tejo",
  "Chamber",
  "Cypher",
  "Deadlock",
  "Killjoy",
  "Sage",
  "Veto",
  "Vyse",
];

const roleOrder = ["Controller", "Duelist", "Initiator", "Sentinel"];

const translations = {
  en: {
    documentLang: "en",
    searchPlaceholder: "Search map, agent, ability",
    themeDark: "Dark",
    themeLight: "Light",
    sections: ["Map", "Agent", "Ability", "Scenario", "Side", "Options"],
    sources: ["Official", "Community", "Mine"],
    scenarios: ["Attack", "Defense", "Post"],
    sides: ["All sides", "Attackers", "Defenders"],
    toggles: ["Show callouts", "Show utility"],
    stageTitle: "Post-plant utility map",
    tools: ["Pins", "Paths", "Grid"],
    selectedLineup: "Selected lineup",
    metaLabels: ["Side", "Ability", "Difficulty", "Verified"],
    stepLabels: ["Stand", "Aim", "Land"],
    stepValues: ["A Main corner", "Roof antenna tip", "Default plant"],
    actions: ["Open guide", "Share"],
    timing: "Timing",
    lineupsLabel: "lineups",
    saveLineup: "Save lineup",
    unsaveLineup: "Unsave lineup",
    closeDetails: "Close selected lineup",
    bookmarks: "Bookmarks",
    profile: "Profile",
    mapSelection: "Map selection",
    agentSelection: "Agent selection",
    primary: "Primary",
    filters: "Filters",
    mapStage: "Lineup map",
    detailsPanel: "Selected lineup details",
    rotate: "Rotate map 90 degrees",
    zoom: ["Zoom out", "Zoom in"],
    sideValues: {
      Attack: "Attack",
      Defense: "Defense",
      Post: "Post",
    },
    difficultyValues: {
      Easy: "Easy",
      Medium: "Medium",
    },
  },
  zh: {
    documentLang: "zh-CN",
    searchPlaceholder: "搜索地图、角色、技能",
    themeDark: "黑色",
    themeLight: "白色",
    sections: ["地图", "角色", "技能", "场景", "阵营", "其他选项"],
    sources: ["官方", "社区", "我的"],
    scenarios: ["进攻", "防守", "残局"],
    sides: ["所有阵营", "进攻方", "防守方"],
    toggles: ["显示呼叫点位", "显示道具"],
    stageTitle: "安装爆能器后的道具地图",
    tools: ["点位", "路线", "网格"],
    selectedLineup: "已选道具",
    metaLabels: ["阵营", "技能", "难度", "版本"],
    stepLabels: ["站位", "瞄准", "落点"],
    stepValues: ["A 大拐角", "屋顶天线尖端", "默认安装点"],
    actions: ["打开指南", "分享"],
    timing: "时机",
    lineupsLabel: "个道具",
    saveLineup: "收藏道具",
    unsaveLineup: "取消收藏道具",
    closeDetails: "关闭已选道具",
    bookmarks: "收藏",
    profile: "个人资料",
    mapSelection: "地图选择",
    agentSelection: "角色选择",
    primary: "主导航",
    filters: "筛选",
    mapStage: "道具地图",
    detailsPanel: "已选道具详情",
    rotate: "地图旋转 90 度",
    zoom: ["缩小地图", "放大地图"],
    sideValues: {
      Attack: "进攻",
      Defense: "防守",
      Post: "残局",
    },
    difficultyValues: {
      Easy: "简单",
      Medium: "中等",
    },
  },
  ja: {
    documentLang: "ja",
    searchPlaceholder: "マップ、エージェント、アビリティを検索",
    themeDark: "ダーク",
    themeLight: "ライト",
    sections: ["マップ", "エージェント", "アビリティ", "シナリオ", "サイド", "その他"],
    sources: ["公式", "コミュニティ", "自分"],
    scenarios: ["攻撃", "防衛", "設置後"],
    sides: ["すべて", "攻撃側", "防衛側"],
    toggles: ["コールアウトを表示", "ユーティリティを表示"],
    stageTitle: "設置後ユーティリティマップ",
    tools: ["ピン", "ルート", "グリッド"],
    selectedLineup: "選択中のラインナップ",
    metaLabels: ["サイド", "アビリティ", "難易度", "確認済み"],
    stepLabels: ["立ち位置", "狙い", "着弾"],
    stepValues: ["A メイン角", "屋根アンテナ先端", "標準設置位置"],
    actions: ["ガイドを開く", "共有"],
    timing: "タイミング",
    lineupsLabel: "ラインナップ",
    saveLineup: "ラインナップを保存",
    unsaveLineup: "ラインナップの保存を解除",
    closeDetails: "選択中のラインナップを閉じる",
    bookmarks: "ブックマーク",
    profile: "プロフィール",
    mapSelection: "マップ選択",
    agentSelection: "エージェント選択",
    primary: "主要ナビゲーション",
    filters: "フィルター",
    mapStage: "ラインナップマップ",
    detailsPanel: "選択中のラインナップ詳細",
    rotate: "マップを90度回転",
    zoom: ["縮小", "拡大"],
    sideValues: {
      Attack: "攻撃",
      Defense: "防衛",
      Post: "設置後",
    },
    difficultyValues: {
      Easy: "簡単",
      Medium: "中",
    },
  },
};

const roles = {
  Controller: { en: "Controller", zh: "控场", ja: "コントローラー" },
  Duelist: { en: "Duelist", zh: "决斗", ja: "デュエリスト" },
  Initiator: { en: "Initiator", zh: "先锋", ja: "イニシエーター" },
  Sentinel: { en: "Sentinel", zh: "哨卫", ja: "センチネル" },
};

const maps = {
  "Ascent": {
    "count": 8,
    "image": "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png",
    "names": {
      "en": "Ascent",
      "zh": "亚海悬城",
      "ja": "アセント"
    },
    "callouts": [
      {
        "left": 39.82,
        "top": 29.46,
        "spawn": false,
        "names": {
          "en": "A Tree",
          "zh": "A区 树木",
          "ja": "A ツリー"
        }
      },
      {
        "left": 60.29,
        "top": 25.9,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 48.42,
        "top": 20.07,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 24.12,
        "top": 29.16,
        "spawn": false,
        "names": {
          "en": "A Window",
          "zh": "A区 窗口",
          "ja": "A ウィンドウ"
        }
      },
      {
        "left": 35.01,
        "top": 14.25,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 81.74,
        "top": 56.9,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 71.66,
        "top": 67.76,
        "spawn": false,
        "names": {
          "en": "B Lobby",
          "zh": "B区 大厅",
          "ja": "B ロビー"
        }
      },
      {
        "left": 40.5,
        "top": 71.21,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 27.05,
        "top": 88.72,
        "spawn": false,
        "names": {
          "en": "B Boat House",
          "zh": "B区 船屋",
          "ja": "B ボートハウス"
        }
      },
      {
        "left": 39.73,
        "top": 49.47,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 28.55,
        "top": 73.73,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 52.5,
        "top": 41.11,
        "spawn": false,
        "names": {
          "en": "Mid Catwalk",
          "zh": "中区 窄道",
          "ja": "中央 キャットウォーク"
        }
      },
      {
        "left": 45.48,
        "top": 33.61,
        "spawn": false,
        "names": {
          "en": "Mid Cubby",
          "zh": "中区 小房间",
          "ja": "中央 小部屋"
        }
      },
      {
        "left": 13.18,
        "top": 43.36,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 28.53,
        "top": 30.91,
        "spawn": false,
        "names": {
          "en": "A Garden",
          "zh": "A区 花园",
          "ja": "A ガーデン"
        }
      },
      {
        "left": 29.85,
        "top": 49.7,
        "spawn": false,
        "names": {
          "en": "Mid Market",
          "zh": "中区 市场",
          "ja": "中央 マーケット"
        }
      },
      {
        "left": 49.28,
        "top": 48.77,
        "spawn": false,
        "names": {
          "en": "Mid Courtyard",
          "zh": "中区 庭院",
          "ja": "中央 コートヤード"
        }
      },
      {
        "left": 51.43,
        "top": 61.75,
        "spawn": false,
        "names": {
          "en": "Mid Link",
          "zh": "中区 小道",
          "ja": "中央 リンク"
        }
      },
      {
        "left": 30.55,
        "top": 44.71,
        "spawn": false,
        "names": {
          "en": "Mid Pizza",
          "zh": "中区 比萨",
          "ja": "中央 ピザ"
        }
      },
      {
        "left": 23.92,
        "top": 14.41,
        "spawn": false,
        "names": {
          "en": "A Rafters",
          "zh": "A区 高台",
          "ja": "A ラフター"
        }
      },
      {
        "left": 66.48,
        "top": 38.05,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 48.56,
        "top": 5.81,
        "spawn": false,
        "names": {
          "en": "A Wine",
          "zh": "A区 酒庄",
          "ja": "A ワイン"
        }
      }
    ]
  },
  "Bind": {
    "count": 6,
    "image": "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/displayicon.png",
    "names": {
      "en": "Bind",
      "zh": "源工重镇",
      "ja": "バインド"
    },
    "callouts": [
      {
        "left": 92.35,
        "top": 52.21,
        "spawn": false,
        "names": {
          "en": "A Exit",
          "zh": "A区 出口",
          "ja": "A 出口"
        }
      },
      {
        "left": 51.75,
        "top": 59.2,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 76.33,
        "top": 60.69,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 62.44,
        "top": 49.65,
        "spawn": false,
        "names": {
          "en": "A Short",
          "zh": "A区 短道",
          "ja": "A ショート"
        }
      },
      {
        "left": 73.41,
        "top": 33.34,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 60.58,
        "top": 41.11,
        "spawn": false,
        "names": {
          "en": "A Teleporter",
          "zh": "A区 传送器",
          "ja": "A テレポーター"
        }
      },
      {
        "left": 58.15,
        "top": 95.8,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 47.29,
        "top": 44.12,
        "spawn": false,
        "names": {
          "en": "B Exit",
          "zh": "B区 出口",
          "ja": "B 出口"
        }
      },
      {
        "left": 28.54,
        "top": 20.16,
        "spawn": false,
        "names": {
          "en": "B Hall",
          "zh": "B区 大堂",
          "ja": "B ホール"
        }
      },
      {
        "left": 42.23,
        "top": 59.22,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 25.89,
        "top": 62.91,
        "spawn": false,
        "names": {
          "en": "B Fountain",
          "zh": "B区 喷泉",
          "ja": "B ファウンテン"
        }
      },
      {
        "left": 19.27,
        "top": 51.52,
        "spawn": false,
        "names": {
          "en": "B Long",
          "zh": "B区 长道",
          "ja": "B ロング"
        }
      },
      {
        "left": 39.66,
        "top": 52.95,
        "spawn": false,
        "names": {
          "en": "B Short",
          "zh": "B区 短道",
          "ja": "B ショート"
        }
      },
      {
        "left": 29.19,
        "top": 31.22,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 15.07,
        "top": 43.49,
        "spawn": false,
        "names": {
          "en": "B Teleporter",
          "zh": "B区 传送器",
          "ja": "B テレポーター"
        }
      },
      {
        "left": 32.27,
        "top": 44.68,
        "spawn": false,
        "names": {
          "en": "B Window",
          "zh": "B区 窗口",
          "ja": "B ウィンドウ"
        }
      },
      {
        "left": 83.95,
        "top": 43.03,
        "spawn": false,
        "names": {
          "en": "A Bath",
          "zh": "A区 澡堂",
          "ja": "A 浴場"
        }
      },
      {
        "left": 59.21,
        "top": 73.63,
        "spawn": false,
        "names": {
          "en": "Attacker Side Cave",
          "zh": "攻方 洞",
          "ja": "アタック側 ケイヴ"
        }
      },
      {
        "left": 58.73,
        "top": 45.99,
        "spawn": false,
        "names": {
          "en": "A Cubby",
          "zh": "A区 小房间",
          "ja": "A 小部屋"
        }
      },
      {
        "left": 51.69,
        "top": 10.37,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 15.83,
        "top": 30.6,
        "spawn": false,
        "names": {
          "en": "B Elbow",
          "zh": "B区 拐角",
          "ja": "B エルボー"
        }
      },
      {
        "left": 24.67,
        "top": 42.81,
        "spawn": false,
        "names": {
          "en": "B Garden",
          "zh": "B区 花园",
          "ja": "B ガーデン"
        }
      },
      {
        "left": 58.17,
        "top": 33.92,
        "spawn": false,
        "names": {
          "en": "A Lamps",
          "zh": "A区 灯",
          "ja": "A ランプ"
        }
      },
      {
        "left": 72.78,
        "top": 20.81,
        "spawn": false,
        "names": {
          "en": "A Tower",
          "zh": "A区 塔楼",
          "ja": "A タワー"
        }
      }
    ]
  },
  "Haven": {
    "count": 7,
    "image": "https://media.valorant-api.com/maps/2bee0dc9-4ffe-519b-1cbd-7fbe763a6047/displayicon.png",
    "names": {
      "en": "Haven",
      "zh": "隐世修所",
      "ja": "ヘイヴン"
    },
    "callouts": [
      {
        "left": 74.22,
        "top": 41.02,
        "spawn": false,
        "names": {
          "en": "A Garden",
          "zh": "A区 花园",
          "ja": "A ガーデン"
        }
      },
      {
        "left": 28.98,
        "top": 32.44,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 62.39,
        "top": 38.48,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 57.59,
        "top": 17.7,
        "spawn": false,
        "names": {
          "en": "A Long",
          "zh": "A区 长道",
          "ja": "A ロング"
        }
      },
      {
        "left": 49.98,
        "top": 38.38,
        "spawn": false,
        "names": {
          "en": "A Sewer",
          "zh": "A区 下水道",
          "ja": "A 下水道"
        }
      },
      {
        "left": 40.15,
        "top": 16.95,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 89.52,
        "top": 51.21,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 29.36,
        "top": 49.53,
        "spawn": false,
        "names": {
          "en": "B Back",
          "zh": "B区 后房",
          "ja": "B バック"
        }
      },
      {
        "left": 40.11,
        "top": 50.14,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 34.31,
        "top": 64.93,
        "spawn": false,
        "names": {
          "en": "C Link",
          "zh": "C区 小道",
          "ja": "C リンク"
        }
      },
      {
        "left": 66.44,
        "top": 76.59,
        "spawn": false,
        "names": {
          "en": "C Lobby",
          "zh": "C区 大厅",
          "ja": "C ロビー"
        }
      },
      {
        "left": 64.41,
        "top": 89.45,
        "spawn": false,
        "names": {
          "en": "C Long",
          "zh": "C区 长道",
          "ja": "C ロング"
        }
      },
      {
        "left": 49.35,
        "top": 62.92,
        "spawn": false,
        "names": {
          "en": "C Garage",
          "zh": "C区 车库",
          "ja": "C ガレージ"
        }
      },
      {
        "left": 41.9,
        "top": 64.35,
        "spawn": false,
        "names": {
          "en": "C Window",
          "zh": "C区 窗口",
          "ja": "C ウィンドウ"
        }
      },
      {
        "left": 41.77,
        "top": 82.11,
        "spawn": false,
        "names": {
          "en": "C Site",
          "zh": "C区 部署区",
          "ja": "C サイト"
        }
      },
      {
        "left": 60.13,
        "top": 80.17,
        "spawn": false,
        "names": {
          "en": "C Cubby",
          "zh": "C区 小房间",
          "ja": "C 小部屋"
        }
      },
      {
        "left": 13.98,
        "top": 42.18,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 62.37,
        "top": 63.14,
        "spawn": false,
        "names": {
          "en": "Mid Doors",
          "zh": "中区 门",
          "ja": "中央 ドア"
        }
      },
      {
        "left": 59,
        "top": 50.61,
        "spawn": false,
        "names": {
          "en": "Mid Courtyard",
          "zh": "中区 庭院",
          "ja": "中央 コートヤード"
        }
      },
      {
        "left": 67.59,
        "top": 49.65,
        "spawn": false,
        "names": {
          "en": "Mid Window",
          "zh": "中区 窗口",
          "ja": "中央 ウィンドウ"
        }
      },
      {
        "left": 30.8,
        "top": 13.86,
        "spawn": false,
        "names": {
          "en": "A Tower",
          "zh": "A区 塔楼",
          "ja": "A タワー"
        }
      }
    ]
  },
  "Split": {
    "count": 6,
    "image": "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/displayicon.png",
    "names": {
      "en": "Split",
      "zh": "霓虹町",
      "ja": "スプリット"
    },
    "callouts": [
      {
        "left": 22.93,
        "top": 12.47,
        "spawn": false,
        "names": {
          "en": "A Back",
          "zh": "A区 后房",
          "ja": "A バック"
        }
      },
      {
        "left": 65.05,
        "top": 16.61,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 49.17,
        "top": 20.77,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 35.4,
        "top": 27.37,
        "spawn": false,
        "names": {
          "en": "A Rafters",
          "zh": "A区 高台",
          "ja": "A ラフター"
        }
      },
      {
        "left": 47.17,
        "top": 35.98,
        "spawn": false,
        "names": {
          "en": "A Ramps",
          "zh": "A区 坡道",
          "ja": "A スロープ"
        }
      },
      {
        "left": 15.04,
        "top": 25.7,
        "spawn": false,
        "names": {
          "en": "A Screens",
          "zh": "A区 屏幕",
          "ja": "A スクリーン"
        }
      },
      {
        "left": 65.75,
        "top": 31.83,
        "spawn": false,
        "names": {
          "en": "A Sewer",
          "zh": "A区 下水道",
          "ja": "A 下水道"
        }
      },
      {
        "left": 31.48,
        "top": 18.37,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 31.58,
        "top": 33.59,
        "spawn": false,
        "names": {
          "en": "A Tower",
          "zh": "A区 塔楼",
          "ja": "A タワー"
        }
      },
      {
        "left": 84.68,
        "top": 54.92,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 21.3,
        "top": 78.79,
        "spawn": false,
        "names": {
          "en": "B Alley",
          "zh": "B区 小巷",
          "ja": "B 路地"
        }
      },
      {
        "left": 26.36,
        "top": 93.99,
        "spawn": false,
        "names": {
          "en": "B Back",
          "zh": "B区 后房",
          "ja": "B バック"
        }
      },
      {
        "left": 65.73,
        "top": 69.97,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 54.2,
        "top": 86.85,
        "spawn": false,
        "names": {
          "en": "B Garage",
          "zh": "B区 车库",
          "ja": "B ガレージ"
        }
      },
      {
        "left": 36.87,
        "top": 74.73,
        "spawn": false,
        "names": {
          "en": "B Rafters",
          "zh": "B区 高台",
          "ja": "B ラフター"
        }
      },
      {
        "left": 35.35,
        "top": 86.66,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 31.48,
        "top": 61.48,
        "spawn": false,
        "names": {
          "en": "B Stairs",
          "zh": "B区 台阶",
          "ja": "B 階段"
        }
      },
      {
        "left": 42.96,
        "top": 68.44,
        "spawn": false,
        "names": {
          "en": "B Tower",
          "zh": "B区 塔楼",
          "ja": "B タワー"
        }
      },
      {
        "left": 68.75,
        "top": 79.68,
        "spawn": false,
        "names": {
          "en": "B Lobby",
          "zh": "B区 大厅",
          "ja": "B ロビー"
        }
      },
      {
        "left": 14.29,
        "top": 53.05,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 61.6,
        "top": 54.76,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 46.71,
        "top": 60.75,
        "spawn": false,
        "names": {
          "en": "Mid Mail",
          "zh": "中区 邮箱",
          "ja": "中央 メールボックス"
        }
      },
      {
        "left": 48.36,
        "top": 53.99,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 42.58,
        "top": 45.15,
        "spawn": false,
        "names": {
          "en": "Mid Vent",
          "zh": "中区 通风口",
          "ja": "中央 ベント"
        }
      }
    ]
  },
  "Lotus": {
    "count": 5,
    "image": "https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/displayicon.png",
    "names": {
      "en": "Lotus",
      "zh": "莲华古城",
      "ja": "ロータス"
    },
    "callouts": [
      {
        "left": 81.81,
        "top": 25.1,
        "spawn": false,
        "names": {
          "en": "A Top",
          "zh": "A区 高地",
          "ja": "A トップ"
        }
      },
      {
        "left": 89.35,
        "top": 23.26,
        "spawn": false,
        "names": {
          "en": "A Drop",
          "zh": "A区 下坡",
          "ja": "A ドロップ"
        }
      },
      {
        "left": 85.49,
        "top": 36.08,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 85.49,
        "top": 34.77,
        "spawn": false,
        "names": {
          "en": "A Hut",
          "zh": "A区 小屋",
          "ja": "A 小屋"
        }
      },
      {
        "left": 85.49,
        "top": 47.5,
        "spawn": false,
        "names": {
          "en": "A Tree",
          "zh": "A区 树",
          "ja": "A ツリー"
        }
      },
      {
        "left": 82.95,
        "top": 51.39,
        "spawn": false,
        "names": {
          "en": "A Door",
          "zh": "A区 通道门",
          "ja": "A 扉"
        }
      },
      {
        "left": 75.43,
        "top": 53.7,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 80.89,
        "top": 60.09,
        "spawn": false,
        "names": {
          "en": "A Rubble",
          "zh": "A区 碎石",
          "ja": "A がれき"
        }
      },
      {
        "left": 69.2,
        "top": 60.09,
        "spawn": false,
        "names": {
          "en": "A Root",
          "zh": "A区 树根",
          "ja": "A ルート"
        }
      },
      {
        "left": 66.55,
        "top": 72.44,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 34.13,
        "top": 81.67,
        "spawn": false,
        "names": {
          "en": "C Lobby",
          "zh": "C区 大厅",
          "ja": "C ロビー"
        }
      },
      {
        "left": 50.29,
        "top": 66.1,
        "spawn": false,
        "names": {
          "en": "B Pillars",
          "zh": "B区 柱子",
          "ja": "B ピラー"
        }
      },
      {
        "left": 45.13,
        "top": 56.66,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 32.86,
        "top": 57.08,
        "spawn": false,
        "names": {
          "en": "C Door",
          "zh": "C区 通道门",
          "ja": "C 扉"
        }
      },
      {
        "left": 50.29,
        "top": 45.93,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 60.51,
        "top": 48.5,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 56.4,
        "top": 36.46,
        "spawn": false,
        "names": {
          "en": "B Upper",
          "zh": "B区 上层",
          "ja": "B アッパー"
        }
      },
      {
        "left": 31.12,
        "top": 43.39,
        "spawn": false,
        "names": {
          "en": "C Waterfall",
          "zh": "C区 瀑布",
          "ja": "C 滝"
        }
      },
      {
        "left": 35.56,
        "top": 37.75,
        "spawn": false,
        "names": {
          "en": "C Link",
          "zh": "C区 小道",
          "ja": "C リンク"
        }
      },
      {
        "left": 73.28,
        "top": 32.32,
        "spawn": false,
        "names": {
          "en": "A Stairs",
          "zh": "A区 台阶",
          "ja": "A 階段"
        }
      },
      {
        "left": 34.13,
        "top": 63.96,
        "spawn": false,
        "names": {
          "en": "C Mound",
          "zh": "C区 土丘",
          "ja": "C マウンド"
        }
      },
      {
        "left": 22.81,
        "top": 53.53,
        "spawn": false,
        "names": {
          "en": "C Main",
          "zh": "C区 大道",
          "ja": "C メイン"
        }
      },
      {
        "left": 7.45,
        "top": 51.04,
        "spawn": false,
        "names": {
          "en": "C Bend",
          "zh": "C区 弯道",
          "ja": "C ベンド"
        }
      },
      {
        "left": 14.76,
        "top": 43.7,
        "spawn": false,
        "names": {
          "en": "C Site",
          "zh": "C区 部署区",
          "ja": "C サイト"
        }
      },
      {
        "left": 14.76,
        "top": 34.88,
        "spawn": false,
        "names": {
          "en": "C Hall",
          "zh": "C区 走廊",
          "ja": "C ホール"
        }
      },
      {
        "left": 32.86,
        "top": 27.43,
        "spawn": false,
        "names": {
          "en": "C Gravel",
          "zh": "C区 碎石路",
          "ja": "C 砂利道"
        }
      },
      {
        "left": 57.7,
        "top": 22.03,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 51.08,
        "top": 81.69,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      }
    ]
  },
  "Sunset": {
    "count": 4,
    "image": "https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/displayicon.png",
    "names": {
      "en": "Sunset",
      "zh": "日落之城",
      "ja": "サンセット"
    },
    "callouts": [
      {
        "left": 12.56,
        "top": 34.4,
        "spawn": false,
        "names": {
          "en": "B Boba",
          "zh": "B区 奶茶店",
          "ja": "B タピオカ"
        }
      },
      {
        "left": 53.12,
        "top": 65.6,
        "spawn": false,
        "names": {
          "en": "Mid Tiles",
          "zh": "中区 红砖路",
          "ja": "中央 タイル"
        }
      },
      {
        "left": 23.48,
        "top": 53.12,
        "spawn": false,
        "names": {
          "en": "B Market",
          "zh": "B区 市场",
          "ja": "B マーケット"
        }
      },
      {
        "left": 4.37,
        "top": 56.24,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 5.93,
        "top": 67.16,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 29.72,
        "top": 78.08,
        "spawn": false,
        "names": {
          "en": "B Lobby",
          "zh": "B区 大厅",
          "ja": "B ロビー"
        }
      },
      {
        "left": 34.2,
        "top": 65.6,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 40.64,
        "top": 56.24,
        "spawn": false,
        "names": {
          "en": "Mid Courtyard",
          "zh": "中区 庭院",
          "ja": "中央 コートヤード"
        }
      },
      {
        "left": 65.6,
        "top": 65.6,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 67.16,
        "top": 54.68,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 73.4,
        "top": 34.4,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 74.96,
        "top": 43.76,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 82.76,
        "top": 50,
        "spawn": false,
        "names": {
          "en": "A Elbow",
          "zh": "A区 拐角",
          "ja": "A エルボー"
        }
      },
      {
        "left": 78.08,
        "top": 25.04,
        "spawn": false,
        "names": {
          "en": "A Alley",
          "zh": "A区 巷道",
          "ja": "A 路地"
        }
      },
      {
        "left": 34.49,
        "top": 21.88,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 34.4,
        "top": 35.96,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 46.88,
        "top": 98.56,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      }
    ]
  },
  "Icebox": {
    "count": 5,
    "image": "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/displayicon.png",
    "names": {
      "en": "Icebox",
      "zh": "森寒冬港",
      "ja": "アイスボックス"
    },
    "callouts": [
      {
        "left": 35.76,
        "top": 39.47,
        "spawn": false,
        "names": {
          "en": "B Garage",
          "zh": "B区 车库",
          "ja": "B ガレージ"
        }
      },
      {
        "left": 39.9,
        "top": 82.31,
        "spawn": false,
        "names": {
          "en": "A Belt",
          "zh": "A区 带状区",
          "ja": "A ベルト"
        }
      },
      {
        "left": 52.5,
        "top": 78.35,
        "spawn": false,
        "names": {
          "en": "A Nest",
          "zh": "A区 高台",
          "ja": "A ネスト"
        }
      },
      {
        "left": 49.26,
        "top": 74.75,
        "spawn": false,
        "names": {
          "en": "A Pipes",
          "zh": "A区 管道",
          "ja": "A パイプ"
        }
      },
      {
        "left": 76.62,
        "top": 76.91,
        "spawn": false,
        "names": {
          "en": "A Rafters",
          "zh": "A区 高台",
          "ja": "A ラフター"
        }
      },
      {
        "left": 69.96,
        "top": 67.19,
        "spawn": false,
        "names": {
          "en": "A Screen",
          "zh": "A区 屏幕",
          "ja": "A スクリーン"
        }
      },
      {
        "left": 69.06,
        "top": 76.55,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 13.98,
        "top": 58.73,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 45.84,
        "top": 15.71,
        "spawn": false,
        "names": {
          "en": "B Yellow",
          "zh": "B区 黄箱",
          "ja": "B イエロー"
        }
      },
      {
        "left": 76.76,
        "top": 28.66,
        "spawn": false,
        "names": {
          "en": "B Back",
          "zh": "B区 后房",
          "ja": "B バック"
        }
      },
      {
        "left": 39,
        "top": 22.91,
        "spawn": false,
        "names": {
          "en": "B Cubby",
          "zh": "B区 小房间",
          "ja": "B 小部屋"
        }
      },
      {
        "left": 40.98,
        "top": 33.71,
        "spawn": false,
        "names": {
          "en": "B Green",
          "zh": "B区 绿箱",
          "ja": "B グリーン"
        }
      },
      {
        "left": 67.98,
        "top": 28.31,
        "spawn": false,
        "names": {
          "en": "B Hall",
          "zh": "B区 大堂",
          "ja": "B ホール"
        }
      },
      {
        "left": 77.7,
        "top": 40.73,
        "spawn": false,
        "names": {
          "en": "B Hut",
          "zh": "B区 小屋",
          "ja": "B 小屋"
        }
      },
      {
        "left": 70.53,
        "top": 46.46,
        "spawn": false,
        "names": {
          "en": "B Kitchen",
          "zh": "B区 厨房",
          "ja": "B キッチン"
        }
      },
      {
        "left": 58.26,
        "top": 35.02,
        "spawn": false,
        "names": {
          "en": "B Orange",
          "zh": "B区 橙箱",
          "ja": "B オレンジ"
        }
      },
      {
        "left": 64.56,
        "top": 18.05,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 74.54,
        "top": 14.27,
        "spawn": false,
        "names": {
          "en": "B Snowman",
          "zh": "B区 雪人",
          "ja": "B 雪だるま"
        }
      },
      {
        "left": 64.02,
        "top": 43.25,
        "spawn": false,
        "names": {
          "en": "B Snow Pile",
          "zh": "B区 雪堆",
          "ja": "B 堆雪場"
        }
      },
      {
        "left": 55.2,
        "top": 47.03,
        "spawn": false,
        "names": {
          "en": "B Tube",
          "zh": "B区 管道",
          "ja": "B チューブ"
        }
      },
      {
        "left": 96.96,
        "top": 57.47,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 53.04,
        "top": 50.81,
        "spawn": false,
        "names": {
          "en": "Mid Blue",
          "zh": "中区 蓝箱",
          "ja": "中央 ブルー"
        }
      },
      {
        "left": 67.08,
        "top": 54.77,
        "spawn": false,
        "names": {
          "en": "Mid Boiler",
          "zh": "中区 锅炉",
          "ja": "中央 ボイラー"
        }
      },
      {
        "left": 58.8,
        "top": 62.51,
        "spawn": false,
        "names": {
          "en": "Mid Pallet",
          "zh": "中区 平台",
          "ja": "中央 パレット"
        }
      },
      {
        "left": 71.91,
        "top": 27.86,
        "spawn": false,
        "names": {
          "en": "B Fence",
          "zh": "B区 栅栏",
          "ja": "B フェンス"
        }
      }
    ]
  },
  "Pearl": {
    "count": 4,
    "image": "https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/displayicon.png",
    "names": {
      "en": "Pearl",
      "zh": "深海明珠",
      "ja": "パール"
    },
    "callouts": [
      {
        "left": 9.4,
        "top": 33.14,
        "spawn": false,
        "names": {
          "en": "B Hall",
          "zh": "B区 走廊",
          "ja": "B ホール"
        }
      },
      {
        "left": 52.71,
        "top": 54.93,
        "spawn": false,
        "names": {
          "en": "Mid Doors",
          "zh": "中区 门",
          "ja": "中央 ドア"
        }
      },
      {
        "left": 62.09,
        "top": 44.43,
        "spawn": false,
        "names": {
          "en": "Mid Connector",
          "zh": "中区 路口",
          "ja": "中央 コネクター"
        }
      },
      {
        "left": 62.09,
        "top": 30.7,
        "spawn": false,
        "names": {
          "en": "Defender Side Water",
          "zh": "守方 排水沟",
          "ja": "ディフェンス側 ウォーター"
        }
      },
      {
        "left": 51,
        "top": 5.08,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 67.6,
        "top": 19.34,
        "spawn": false,
        "names": {
          "en": "A Flowers",
          "zh": "A区 花店",
          "ja": "A フラワー"
        }
      },
      {
        "left": 77.93,
        "top": 10.03,
        "spawn": false,
        "names": {
          "en": "A Secret",
          "zh": "A区 隐藏",
          "ja": "A シークレット"
        }
      },
      {
        "left": 93.71,
        "top": 31.85,
        "spawn": false,
        "names": {
          "en": "A Dugout",
          "zh": "A区 低地",
          "ja": "A ダグアウト"
        }
      },
      {
        "left": 91.49,
        "top": 40.01,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 36.58,
        "top": 21.61,
        "spawn": false,
        "names": {
          "en": "Defender Side Records",
          "zh": "守方 唱片店",
          "ja": "ディフェンス側 レコード"
        }
      },
      {
        "left": 53.7,
        "top": 75.42,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 高地",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 31.24,
        "top": 21.61,
        "spawn": false,
        "names": {
          "en": "B Tunnel",
          "zh": "B区 地道",
          "ja": "B トンネル"
        }
      },
      {
        "left": 25.81,
        "top": 25.04,
        "spawn": false,
        "names": {
          "en": "B Tower",
          "zh": "B区 塔楼",
          "ja": "B タワー"
        }
      },
      {
        "left": 77.88,
        "top": 41.93,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 主门",
          "ja": "A メイン"
        }
      },
      {
        "left": 69.99,
        "top": 57.04,
        "spawn": false,
        "names": {
          "en": "A Restaurant",
          "zh": "A区 餐厅",
          "ja": "A レストラン"
        }
      },
      {
        "left": 43.43,
        "top": 56.48,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 74.62,
        "top": 56.02,
        "spawn": false,
        "names": {
          "en": "A Art",
          "zh": "A区 画架",
          "ja": "A アート"
        }
      },
      {
        "left": 77.55,
        "top": 44.37,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 45.51,
        "top": 70.15,
        "spawn": false,
        "names": {
          "en": "Mid Plaza",
          "zh": "中区 广场",
          "ja": "中央 プラザ"
        }
      },
      {
        "left": 36.74,
        "top": 85.36,
        "spawn": false,
        "names": {
          "en": "Mid Shops",
          "zh": "中区 商店",
          "ja": "中央 ショップ"
        }
      },
      {
        "left": 36.74,
        "top": 85.36,
        "spawn": false,
        "names": {
          "en": "B Club",
          "zh": "B区 夜店",
          "ja": "B クラブ"
        }
      },
      {
        "left": 18.41,
        "top": 77.95,
        "spawn": false,
        "names": {
          "en": "B Ramp",
          "zh": "B区 坡道",
          "ja": "B スロープ"
        }
      },
      {
        "left": 13.92,
        "top": 60.01,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 主门",
          "ja": "B メイン"
        }
      },
      {
        "left": 25.82,
        "top": 46.36,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 9.04,
        "top": 42.77,
        "spawn": false,
        "names": {
          "en": "B Screen",
          "zh": "B区 屏幕",
          "ja": "B スクリーン"
        }
      },
      {
        "left": 43.37,
        "top": 95.89,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      }
    ]
  },
  "Fracture": {
    "count": 4,
    "image": "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/displayicon.png",
    "names": {
      "en": "Fracture",
      "zh": "裂变峡谷",
      "ja": "フラクチャー"
    },
    "callouts": [
      {
        "left": 49.8,
        "top": 12.6,
        "spawn": false,
        "names": {
          "en": "Attacker Side Bridge",
          "zh": "攻方 桥",
          "ja": "アタック側 ブリッジ"
        }
      },
      {
        "left": 33.1,
        "top": 26.1,
        "spawn": false,
        "names": {
          "en": "B Bench",
          "zh": "B区 长椅",
          "ja": "B ベンチ"
        }
      },
      {
        "left": 23.1,
        "top": 36.18,
        "spawn": false,
        "names": {
          "en": "B Arcade",
          "zh": "B区 拱廊",
          "ja": "B アーケード"
        }
      },
      {
        "left": 12.01,
        "top": 44.18,
        "spawn": false,
        "names": {
          "en": "B Tower",
          "zh": "B区 塔楼",
          "ja": "B タワー"
        }
      },
      {
        "left": 9.35,
        "top": 51.8,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 29.33,
        "top": 50.36,
        "spawn": false,
        "names": {
          "en": "B Generator",
          "zh": "B区 发电机",
          "ja": "B ジェネレーター"
        }
      },
      {
        "left": 34.32,
        "top": 43.84,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 31.22,
        "top": 60.12,
        "spawn": false,
        "names": {
          "en": "B Canteen",
          "zh": "B区 餐厅",
          "ja": "B カンティーン"
        }
      },
      {
        "left": 65.85,
        "top": 48.68,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 50.41,
        "top": 44.17,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 14.02,
        "top": 69.05,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 23.64,
        "top": 76.86,
        "spawn": false,
        "names": {
          "en": "B Tree",
          "zh": "B区 树木",
          "ja": "B ツリー"
        }
      },
      {
        "left": 24.04,
        "top": 57.85,
        "spawn": false,
        "names": {
          "en": "B Tunnel",
          "zh": "B区 隧道",
          "ja": "B トンネル"
        }
      },
      {
        "left": 71.74,
        "top": 76.09,
        "spawn": false,
        "names": {
          "en": "A Hall",
          "zh": "A区 大堂",
          "ja": "A ホール"
        }
      },
      {
        "left": 70.83,
        "top": 70.29,
        "spawn": false,
        "names": {
          "en": "A Door",
          "zh": "A区 门",
          "ja": "A ドア"
        }
      },
      {
        "left": 63.91,
        "top": 63.81,
        "spawn": false,
        "names": {
          "en": "A Rope",
          "zh": "A区 绳索",
          "ja": "A ロープ"
        }
      },
      {
        "left": 82.61,
        "top": 69.73,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 82.01,
        "top": 52.21,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 77.74,
        "top": 43,
        "spawn": false,
        "names": {
          "en": "A Drop",
          "zh": "A区 下坡",
          "ja": "A ドロップ"
        }
      },
      {
        "left": 66.55,
        "top": 27.47,
        "spawn": false,
        "names": {
          "en": "A Dish",
          "zh": "A区 卫星天线",
          "ja": "A パラボラ"
        }
      },
      {
        "left": 67.9,
        "top": 14.48,
        "spawn": false,
        "names": {
          "en": "A Gate",
          "zh": "A区 大门",
          "ja": "A ゲート"
        }
      },
      {
        "left": 48.3,
        "top": 81.69,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      }
    ]
  },
  "Breeze": {
    "count": 3,
    "image": "https://media.valorant-api.com/maps/2fb9a4fd-47b8-4e7d-a969-74b4046ebd53/displayicon.png",
    "names": {
      "en": "Breeze",
      "zh": "微风岛屿",
      "ja": "ブリーズ"
    },
    "callouts": [
      {
        "left": 63.95,
        "top": 53.51,
        "spawn": false,
        "names": {
          "en": "Mid Hall",
          "zh": "中区 大堂",
          "ja": "中央 ホール"
        }
      },
      {
        "left": 71.19,
        "top": 24.51,
        "spawn": false,
        "names": {
          "en": "A Bridge",
          "zh": "A区 桥",
          "ja": "A ブリッジ"
        }
      },
      {
        "left": 71.19,
        "top": 21.01,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 37.41,
        "top": 17.51,
        "spawn": false,
        "names": {
          "en": "Defender Side Arches",
          "zh": "守方 拱门",
          "ja": "ディフェンス側 アーチ"
        }
      },
      {
        "left": 64.36,
        "top": 49.53,
        "spawn": false,
        "names": {
          "en": "Mid Wood Doors",
          "zh": "中区 木门",
          "ja": "中央 ウッドドア"
        }
      },
      {
        "left": 49.84,
        "top": 54.08,
        "spawn": false,
        "names": {
          "en": "Mid Pillar",
          "zh": "中区 柱子",
          "ja": "中央 ピラー"
        }
      },
      {
        "left": 50.19,
        "top": 40.08,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 48.44,
        "top": 22.76,
        "spawn": false,
        "names": {
          "en": "Mid Nest",
          "zh": "中区 高台",
          "ja": "中央 ネスト"
        }
      },
      {
        "left": 17.29,
        "top": 67.73,
        "spawn": false,
        "names": {
          "en": "B Window",
          "zh": "B区 窗口",
          "ja": "B ウィンドウ"
        }
      },
      {
        "left": 15.36,
        "top": 58.46,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 26.21,
        "top": 50.58,
        "spawn": false,
        "names": {
          "en": "B Elbow",
          "zh": "B区 拐角",
          "ja": "B エルボー"
        }
      },
      {
        "left": 6.96,
        "top": 38.16,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 36.36,
        "top": 38.16,
        "spawn": false,
        "names": {
          "en": "B Tunnel",
          "zh": "B区 隧道",
          "ja": "B トンネル"
        }
      },
      {
        "left": 65.59,
        "top": 32.21,
        "spawn": false,
        "names": {
          "en": "A Ramp",
          "zh": "A区 坡道",
          "ja": "A スロープ"
        }
      },
      {
        "left": 6.79,
        "top": 30.46,
        "spawn": false,
        "names": {
          "en": "B Back",
          "zh": "B区 后房",
          "ja": "B バック"
        }
      },
      {
        "left": 25.51,
        "top": 23.46,
        "spawn": false,
        "names": {
          "en": "B Wall",
          "zh": "B区 墙",
          "ja": "B ウォール"
        }
      },
      {
        "left": 33.56,
        "top": 63.01,
        "spawn": false,
        "names": {
          "en": "Mid Cannon",
          "zh": "中区 大炮",
          "ja": "中央 キャノン"
        }
      },
      {
        "left": 49.84,
        "top": 72.28,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 70.31,
        "top": 92.06,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 76.26,
        "top": 68.26,
        "spawn": false,
        "names": {
          "en": "A Shop",
          "zh": "A区 商店",
          "ja": "A ショップ"
        }
      },
      {
        "left": 90.79,
        "top": 49.53,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 84.66,
        "top": 46.91,
        "spawn": false,
        "names": {
          "en": "A Pyramids",
          "zh": "A区 金字塔",
          "ja": "A ピラミッド"
        }
      },
      {
        "left": 43.36,
        "top": 87.33,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      }
    ]
  },
  "Abyss": {
    "count": 3,
    "image": "https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/displayicon.png",
    "names": {
      "en": "Abyss",
      "zh": "幽邃地窟",
      "ja": "アビス"
    },
    "callouts": [
      {
        "left": 46.96,
        "top": 3.83,
        "spawn": false,
        "names": {
          "en": "A Bridge",
          "zh": "A区 窄桥",
          "ja": "A ブリッジ"
        }
      },
      {
        "left": 30.15,
        "top": 27.32,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 77.54,
        "top": 23.67,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 63.37,
        "top": 19.22,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 48.38,
        "top": 15.17,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 90.09,
        "top": 42.3,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 48.99,
        "top": 25.5,
        "spawn": false,
        "names": {
          "en": "A Tower",
          "zh": "A区 瞭望台",
          "ja": "A タワー"
        }
      },
      {
        "left": 58.71,
        "top": 63.77,
        "spawn": false,
        "names": {
          "en": "Mid Bend",
          "zh": "中区 拐角",
          "ja": "中央 ベンド"
        }
      },
      {
        "left": 30.96,
        "top": 66.2,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 82.6,
        "top": 79.56,
        "spawn": false,
        "names": {
          "en": "B Lobby",
          "zh": "B区 大厅",
          "ja": "B ロビー"
        }
      },
      {
        "left": 62.35,
        "top": 86.04,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 67.42,
        "top": 90.3,
        "spawn": false,
        "names": {
          "en": "B Nest",
          "zh": "B区 高台",
          "ja": "B ネスト"
        }
      },
      {
        "left": 54.66,
        "top": 53.24,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 40.48,
        "top": 85.84,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 54.25,
        "top": 45.14,
        "spawn": false,
        "names": {
          "en": "Mid Catwalk",
          "zh": "中区 天桥",
          "ja": "中央 キャットウォーク"
        }
      },
      {
        "left": 55.67,
        "top": 97.39,
        "spawn": false,
        "names": {
          "en": "B Danger",
          "zh": "B区 险路",
          "ja": "B デンジャー"
        }
      },
      {
        "left": 7.27,
        "top": 42.3,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 45.14,
        "top": 52.63,
        "spawn": false,
        "names": {
          "en": "Mid Library",
          "zh": "中区 图书馆",
          "ja": "中央 ライブラリー"
        }
      },
      {
        "left": 18.81,
        "top": 19.42,
        "spawn": false,
        "names": {
          "en": "A Secret",
          "zh": "A区 密道",
          "ja": "A シークレット"
        }
      },
      {
        "left": 25.9,
        "top": 10.31,
        "spawn": false,
        "names": {
          "en": "A Security",
          "zh": "A区 保安室",
          "ja": "A セキュリティー"
        }
      },
      {
        "left": 30.76,
        "top": 43.72,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      },
      {
        "left": 29.75,
        "top": 81.79,
        "spawn": false,
        "names": {
          "en": "B Tower",
          "zh": "B区 瞭望台",
          "ja": "B タワー"
        }
      },
      {
        "left": 47.37,
        "top": 36.23,
        "spawn": false,
        "names": {
          "en": "A Vent",
          "zh": "A区 通风口",
          "ja": "A 換気通路"
        }
      }
    ]
  },
  "Corrode": {
    "count": 2,
    "image": "https://media.valorant-api.com/maps/1c18ab1f-420d-0d8b-71d0-77ad3c439115/displayicon.png",
    "names": {
      "en": "Corrode",
      "zh": "盐海矿镇",
      "ja": "カロード"
    },
    "callouts": [
      {
        "left": 24.62,
        "top": 18.79,
        "spawn": false,
        "names": {
          "en": "A Crane",
          "zh": "A区 吊车",
          "ja": "A クレーン"
        }
      },
      {
        "left": 38.09,
        "top": 10.92,
        "spawn": false,
        "names": {
          "en": "A Elbow",
          "zh": "A区 拐角",
          "ja": "A エルボー"
        }
      },
      {
        "left": 45.27,
        "top": 37.52,
        "spawn": false,
        "names": {
          "en": "A Link",
          "zh": "A区 小道",
          "ja": "A リンク"
        }
      },
      {
        "left": 70.82,
        "top": 19.67,
        "spawn": false,
        "names": {
          "en": "A Lobby",
          "zh": "A区 大厅",
          "ja": "A ロビー"
        }
      },
      {
        "left": 61.19,
        "top": 8.47,
        "spawn": false,
        "names": {
          "en": "A Main",
          "zh": "A区 大道",
          "ja": "A メイン"
        }
      },
      {
        "left": 47.02,
        "top": 10.92,
        "spawn": false,
        "names": {
          "en": "A Pocket",
          "zh": "A区 死角",
          "ja": "A ポケット"
        }
      },
      {
        "left": 39.84,
        "top": 25.79,
        "spawn": false,
        "names": {
          "en": "A Site",
          "zh": "A区 部署区",
          "ja": "A サイト"
        }
      },
      {
        "left": 92.34,
        "top": 50.18,
        "spawn": true,
        "names": {
          "en": "Attacker Side Spawn",
          "zh": "攻方 重生点",
          "ja": "アタック側 スポーン"
        }
      },
      {
        "left": 47.02,
        "top": 19.67,
        "spawn": false,
        "names": {
          "en": "A Yard",
          "zh": "A区 庭院",
          "ja": "A ヤード"
        }
      },
      {
        "left": 21.82,
        "top": 72.52,
        "spawn": false,
        "names": {
          "en": "B Arch",
          "zh": "B区 拱门",
          "ja": "B アーチ"
        }
      },
      {
        "left": 32.14,
        "top": 89.14,
        "spawn": false,
        "names": {
          "en": "B Elbow",
          "zh": "B区 拐角",
          "ja": "B エルボー"
        }
      },
      {
        "left": 39.84,
        "top": 59.04,
        "spawn": false,
        "names": {
          "en": "B Link",
          "zh": "B区 小道",
          "ja": "B リンク"
        }
      },
      {
        "left": 72.04,
        "top": 61.67,
        "spawn": false,
        "names": {
          "en": "B Lobby",
          "zh": "B区 大厅",
          "ja": "B ロビー"
        }
      },
      {
        "left": 57.87,
        "top": 69.02,
        "spawn": false,
        "names": {
          "en": "B Main",
          "zh": "B区 大道",
          "ja": "B メイン"
        }
      },
      {
        "left": 53.84,
        "top": 49.07,
        "spawn": false,
        "names": {
          "en": "Mid Bottom",
          "zh": "中区 坡底",
          "ja": "中央 ボトム"
        }
      },
      {
        "left": 44.39,
        "top": 69.02,
        "spawn": false,
        "names": {
          "en": "B Site",
          "zh": "B区 部署区",
          "ja": "B サイト"
        }
      },
      {
        "left": 32.14,
        "top": 74.62,
        "spawn": false,
        "names": {
          "en": "B Tower",
          "zh": "B区 高台",
          "ja": "B タワー"
        }
      },
      {
        "left": 12.37,
        "top": 49.94,
        "spawn": true,
        "names": {
          "en": "Defender Side Spawn",
          "zh": "守方 重生点",
          "ja": "ディフェンス側 スポーン"
        }
      },
      {
        "left": 42.29,
        "top": 49.07,
        "spawn": false,
        "names": {
          "en": "Mid Stairs",
          "zh": "中区 台阶",
          "ja": "中央 階段"
        }
      },
      {
        "left": 30.92,
        "top": 49.07,
        "spawn": false,
        "names": {
          "en": "Mid Window",
          "zh": "中区 窗口",
          "ja": "中央 ウィンドウ"
        }
      },
      {
        "left": 39.84,
        "top": 49.07,
        "spawn": false,
        "names": {
          "en": "Mid Top",
          "zh": "中区 坡顶",
          "ja": "中央 トップ"
        }
      }
    ]
  }
};

const agents = {
  Astra: { role: "Controller", names: { en: "Astra", zh: "星礈", ja: "アストラ" }, icon: "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png" },
  Breach: { role: "Initiator", names: { en: "Breach", zh: "铁臂", ja: "ブリーチ" }, icon: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png" },
  Brimstone: { role: "Controller", names: { en: "Brimstone", zh: "炼狱", ja: "ブリムストーン" }, icon: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png" },
  Chamber: { role: "Sentinel", names: { en: "Chamber", zh: "尚勃勒", ja: "チェンバー" }, icon: "https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png" },
  Clove: { role: "Controller", names: { en: "Clove", zh: "暮蝶", ja: "クローヴ" }, icon: "https://media.valorant-api.com/agents/1dbf2edd-4729-0984-3115-daa5eed44993/displayicon.png" },
  Cypher: { role: "Sentinel", names: { en: "Cypher", zh: "零", ja: "サイファー" }, icon: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png" },
  Deadlock: { role: "Sentinel", names: { en: "Deadlock", zh: "钢锁", ja: "デッドロック" }, icon: "https://media.valorant-api.com/agents/cc8b64c8-4b25-4ff9-6e7f-37b4da43d235/displayicon.png" },
  Fade: { role: "Initiator", names: { en: "Fade", zh: "黑梦", ja: "フェイド" }, icon: "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png" },
  Gekko: { role: "Initiator", names: { en: "Gekko", zh: "盖可", ja: "ゲッコー" }, icon: "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png" },
  Harbor: { role: "Controller", names: { en: "Harbor", zh: "海神", ja: "ハーバー" }, icon: "https://media.valorant-api.com/agents/95b78ed7-4637-86d9-7e41-71ba8c293152/displayicon.png" },
  Iso: { role: "Duelist", names: { en: "Iso", zh: "壹决", ja: "アイソ" }, icon: "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/displayicon.png" },
  Jett: { role: "Duelist", names: { en: "Jett", zh: "捷风", ja: "ジェット" }, icon: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png" },
  "KAY/O": { role: "Initiator", names: { en: "KAY/O", zh: "K/O", ja: "KAY/O" }, icon: "https://media.valorant-api.com/agents/601dbbe7-43ce-be57-2a40-4abd24953621/displayicon.png" },
  Killjoy: { role: "Sentinel", names: { en: "Killjoy", zh: "奇乐", ja: "キルジョイ" }, icon: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png" },
  Miks: { role: "Controller", names: { en: "Miks", zh: "迷核", ja: "ミクス" }, icon: "https://media.valorant-api.com/agents/7c8a4701-4de6-9355-b254-e09bc2a34b72/displayicon.png" },
  Neon: { role: "Duelist", names: { en: "Neon", zh: "霓虹", ja: "ネオン" }, icon: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/displayicon.png" },
  Omen: { role: "Controller", names: { en: "Omen", zh: "幽影", ja: "オーメン" }, icon: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png" },
  Phoenix: { role: "Duelist", names: { en: "Phoenix", zh: "不死鸟", ja: "フェニックス" }, icon: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png" },
  Raze: { role: "Duelist", names: { en: "Raze", zh: "雷兹", ja: "レイズ" }, icon: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png" },
  Reyna: { role: "Duelist", names: { en: "Reyna", zh: "芮娜", ja: "レイナ" }, icon: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png" },
  Sage: { role: "Sentinel", names: { en: "Sage", zh: "贤者", ja: "セージ" }, icon: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png" },
  Skye: { role: "Initiator", names: { en: "Skye", zh: "斯凯", ja: "スカイ" }, icon: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png" },
  Sova: { role: "Initiator", names: { en: "Sova", zh: "猎枭", ja: "ソーヴァ" }, icon: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/displayicon.png" },
  Tejo: { role: "Initiator", names: { en: "Tejo", zh: "钛狐", ja: "テホ" }, icon: "https://media.valorant-api.com/agents/b444168c-4e35-8076-db47-ef9bf368f384/displayicon.png" },
  Veto: { role: "Sentinel", names: { en: "Veto", zh: "禁灭", ja: "ヴィトー" }, icon: "https://media.valorant-api.com/agents/92eeef5d-43b5-1d4a-8d03-b3927a09034b/displayicon.png" },
  Viper: { role: "Controller", names: { en: "Viper", zh: "蝰蛇", ja: "ヴァイパー" }, icon: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png" },
  Vyse: { role: "Sentinel", names: { en: "Vyse", zh: "维斯", ja: "ヴァイス" }, icon: "https://media.valorant-api.com/agents/efba5359-4016-a1e5-7626-b1ae76895940/displayicon.png" },
  Waylay: { role: "Duelist", names: { en: "Waylay", zh: "幻棱", ja: "ウェイレイ" }, icon: "https://media.valorant-api.com/agents/df1cb487-4902-002e-5c17-d28e83e78588/displayicon.png" },
  Yoru: { role: "Duelist", names: { en: "Yoru", zh: "夜露", ja: "ヨル" }, icon: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/displayicon.png" },
};

const abilities = {
  "Viper": [
    {
      "en": "Poison Cloud",
      "zh": "瘴云",
      "ja": "ポイズンクラウド"
    },
    {
      "en": "Toxic Screen",
      "zh": "毒幕",
      "ja": "トキシックスクリーン"
    },
    {
      "en": "Snake Bite",
      "zh": "蛇吻",
      "ja": "スネークバイト"
    },
    {
      "en": "Viper's Pit",
      "zh": "蝰腹",
      "ja": "ヴァイパーズピット"
    },
    {
      "en": "Toxic",
      "zh": "毒素",
      "ja": "トキシック"
    }
  ],
  "Astra": [
    {
      "en": "Nova Pulse",
      "zh": "新星脉冲",
      "ja": "ノヴァパルス"
    },
    {
      "en": "Nebula  / Dissipate",
      "zh": "星云/消散",
      "ja": "ネビュラ / ディシペイト"
    },
    {
      "en": "Gravity Well",
      "zh": "重力之阱",
      "ja": "グラビティウェル"
    },
    {
      "en": "Astral Form / Cosmic Divide",
      "zh": "星界形态/宇宙分裂",
      "ja": "アストラルフォーム / コズミックディバイド"
    },
    {
      "en": "Astral Form",
      "zh": "星界形态",
      "ja": "アストラルフォーム"
    }
  ],
  "Brimstone": [
    {
      "en": "Stim Beacon",
      "zh": "振奋信标",
      "ja": "スティムビーコン"
    },
    {
      "en": "Incendiary",
      "zh": "燃烧榴弹",
      "ja": "インセンディアリー"
    },
    {
      "en": "Sky Smoke",
      "zh": "空投烟幕",
      "ja": "スカイスモーク"
    },
    {
      "en": "Orbital Strike",
      "zh": "天基光束",
      "ja": "オービタルストライク"
    }
  ],
  "Clove": [
    {
      "en": "Pick-me-up",
      "zh": "虹吸",
      "ja": "ピック・ミー・アップ"
    },
    {
      "en": "Ruse",
      "zh": "霞染",
      "ja": "ルース"
    },
    {
      "en": "Not Dead Yet",
      "zh": "化蝶",
      "ja": "ノット・デッド・イェット"
    },
    {
      "en": "Meddle",
      "zh": "整蛊",
      "ja": "メドル"
    }
  ],
  "Harbor": [
    {
      "en": "High Tide",
      "zh": "狂潮",
      "ja": "ハイタイド"
    },
    {
      "en": "Storm Surge",
      "zh": "乱涌",
      "ja": "ストームサージ"
    },
    {
      "en": "Cove",
      "zh": "海盾",
      "ja": "コーヴ"
    },
    {
      "en": "Reckoning",
      "zh": "怒涛",
      "ja": "レコニング"
    }
  ],
  "Miks": [
    {
      "en": "M-pulse",
      "zh": "电音脉冲",
      "ja": "M-パルス"
    },
    {
      "en": "Waveform",
      "zh": "声波帷幕",
      "ja": "ウェーブフォーム"
    },
    {
      "en": "Harmonize",
      "zh": "共振谐律",
      "ja": "ハーモナイズ"
    },
    {
      "en": "Bassquake",
      "zh": "音脉强袭",
      "ja": "ベースクエイク"
    }
  ],
  "Omen": [
    {
      "en": "Paranoia",
      "zh": "暗魇",
      "ja": "パラノイア"
    },
    {
      "en": "Dark Cover",
      "zh": "黑瘴",
      "ja": "ダークカヴァー"
    },
    {
      "en": "Shrouded Step",
      "zh": "践影",
      "ja": "シュラウドステップ"
    },
    {
      "en": "From the Shadows",
      "zh": "离魂",
      "ja": "フロム・ザ・シャドウズ"
    }
  ],
  "Iso": [
    {
      "en": "Undercut",
      "zh": "稳态剥离",
      "ja": "アンダーカット"
    },
    {
      "en": "Kill Contract",
      "zh": "决斗通牒",
      "ja": "キルコントラクト"
    },
    {
      "en": "Double Tap",
      "zh": "战斗心流",
      "ja": "ダブルタップ"
    },
    {
      "en": "Contingency",
      "zh": "绝对屏障",
      "ja": "コンティンジェンシー"
    }
  ],
  "Jett": [
    {
      "en": "Updraft",
      "zh": "凌空",
      "ja": "アップドラフト"
    },
    {
      "en": "Tailwind",
      "zh": "逐风",
      "ja": "テイルウィンド"
    },
    {
      "en": "Cloudburst",
      "zh": "瞬云",
      "ja": "クラウドバースト"
    },
    {
      "en": "Blade Storm",
      "zh": "飓刃",
      "ja": "ブレードストーム"
    },
    {
      "en": "Drift",
      "zh": "飘移",
      "ja": "ドリフト"
    }
  ],
  "Neon": [
    {
      "en": "High Gear",
      "zh": "充能疾驰",
      "ja": "ハイギア"
    },
    {
      "en": "Relay Bolt",
      "zh": "闪电弹球",
      "ja": "リレーボルト"
    },
    {
      "en": "Fast Lane",
      "zh": "高速通道",
      "ja": "ファストレーン"
    },
    {
      "en": "Overdrive",
      "zh": "超限暴走",
      "ja": "オーバードライブ"
    }
  ],
  "Phoenix": [
    {
      "en": "Blaze",
      "zh": "火冒三丈",
      "ja": "ブレイズ"
    },
    {
      "en": "Hot Hands",
      "zh": "火热手感",
      "ja": "ホットハンド"
    },
    {
      "en": "Curveball",
      "zh": "闪光曲球",
      "ja": "カーブボール"
    },
    {
      "en": "Run it Back",
      "zh": "再火一回",
      "ja": "ラン・イット・バック"
    },
    {
      "en": "Heating Up",
      "zh": "热度上升",
      "ja": "ヒートアップ"
    }
  ],
  "Raze": [
    {
      "en": "Blast Pack",
      "zh": "惊喜翻腾",
      "ja": "ブラストパック"
    },
    {
      "en": "Paint Shells",
      "zh": "彩雷飞溅",
      "ja": "ペイント弾"
    },
    {
      "en": "Boom Bot",
      "zh": "花车巡游",
      "ja": "ブームボット"
    },
    {
      "en": "Showstopper",
      "zh": "晚安焰火",
      "ja": "ショーストッパー"
    }
  ],
  "Reyna": [
    {
      "en": "Devour",
      "zh": "噬尽",
      "ja": "デバウアー"
    },
    {
      "en": "Dismiss",
      "zh": "逐散",
      "ja": "ディスミス"
    },
    {
      "en": "Leer",
      "zh": "睥睨",
      "ja": "リーア"
    },
    {
      "en": "Empress",
      "zh": "女皇旨令",
      "ja": "エンプレス"
    }
  ],
  "Waylay": [
    {
      "en": "Refract",
      "zh": "溯流回光",
      "ja": "リフラクト"
    },
    {
      "en": "Saturate",
      "zh": "光棱闪爆",
      "ja": "サチュレート"
    },
    {
      "en": "Lightspeed",
      "zh": "光速飞跃",
      "ja": "ライトスピード"
    },
    {
      "en": "Convergent Paths",
      "zh": "时光修罗场",
      "ja": "コンバージェントパス"
    }
  ],
  "Yoru": [
    {
      "en": "FAKEOUT",
      "zh": "出其不意",
      "ja": "フェイクアウト"
    },
    {
      "en": "BLINDSIDE",
      "zh": "攻其不备",
      "ja": "ブラインドサイド"
    },
    {
      "en": "GATECRASH",
      "zh": "不请自来",
      "ja": "ゲートクラッシュ"
    },
    {
      "en": "DIMENSIONAL DRIFT",
      "zh": "神鬼不觉",
      "ja": "ディメンショナル ドリフト"
    }
  ],
  "Breach": [
    {
      "en": "Flashpoint",
      "zh": "闪点爆破",
      "ja": "フラッシュポイント"
    },
    {
      "en": "Fault Line",
      "zh": "山崩地陷",
      "ja": "フォールトライン"
    },
    {
      "en": "Aftershock",
      "zh": "剧震余波",
      "ja": "アフターショック"
    },
    {
      "en": "Rolling Thunder",
      "zh": "惊雷卷地",
      "ja": "ローリングサンダー"
    }
  ],
  "Fade": [
    {
      "en": "Seize",
      "zh": "幽爪",
      "ja": "シーズ"
    },
    {
      "en": "Haunt",
      "zh": "诡眼",
      "ja": "ホウント"
    },
    {
      "en": "Prowler",
      "zh": "黯兽",
      "ja": "プラウラー"
    },
    {
      "en": "Nightfall",
      "zh": "夜临",
      "ja": "ナイトフォール"
    }
  ],
  "Gekko": [
    {
      "en": "Wingman",
      "zh": "顽皮搭档",
      "ja": "ウィングマン"
    },
    {
      "en": "Dizzy",
      "zh": "炫晕光波",
      "ja": "ディジー"
    },
    {
      "en": "Mosh Pit",
      "zh": "嗨爆全场",
      "ja": "モッシュピット"
    },
    {
      "en": "Thrash",
      "zh": "无敌超鲨",
      "ja": "スラッシュ"
    }
  ],
  "KAY/O": [
    {
      "en": "FRAG/ment",
      "zh": "碎片溢出",
      "ja": "フラグ/メント"
    },
    {
      "en": "FLASH/drive",
      "zh": "闪存过载",
      "ja": "フラッシュ/ドライブ"
    },
    {
      "en": "ZERO/point",
      "zh": "零点嗅探",
      "ja": "ゼロ/ポイント"
    },
    {
      "en": "NULL/cmd",
      "zh": "无效命令",
      "ja": "ヌル/コマンド"
    }
  ],
  "Skye": [
    {
      "en": "Trailblazer",
      "zh": "辟林之虎",
      "ja": "トレイルブレイザー"
    },
    {
      "en": "Guiding Light",
      "zh": "引路之隼",
      "ja": "ガイディングライト"
    },
    {
      "en": "Regrowth",
      "zh": "愈生之息",
      "ja": "リグロウス"
    },
    {
      "en": "Seekers",
      "zh": "追猎之灵",
      "ja": "シーカー"
    }
  ],
  "Sova": [
    {
      "en": "Shock Bolt",
      "zh": "雷击箭",
      "ja": "ショックボルト"
    },
    {
      "en": "Recon Bolt",
      "zh": "寻敌箭",
      "ja": "リコンボルト"
    },
    {
      "en": "Owl Drone",
      "zh": "枭型无人机",
      "ja": "オウルドローン"
    },
    {
      "en": "Hunter's Fury",
      "zh": "狂猎之怒",
      "ja": "ハンターズフューリー"
    },
    {
      "en": "Uncanny Marksman",
      "zh": "诡秘神射手",
      "ja": "神業の射手"
    }
  ],
  "Tejo": [
    {
      "en": "Guided Salvo",
      "zh": "精准投放",
      "ja": "誘導サルヴォ"
    },
    {
      "en": "Special Delivery",
      "zh": "特快专递",
      "ja": "スペシャルデリバリー"
    },
    {
      "en": "Armageddon",
      "zh": "末日审判",
      "ja": "アルマゲドン"
    },
    {
      "en": "Stealth Drone",
      "zh": "潜袭爬虫",
      "ja": "ステルスドローン"
    }
  ],
  "Chamber": [
    {
      "en": "Rendezvous",
      "zh": "闪转自如",
      "ja": "ランデヴー"
    },
    {
      "en": "Trademark",
      "zh": "贵宾限行",
      "ja": "トレードマーク"
    },
    {
      "en": "Headhunter",
      "zh": "金牌猎头",
      "ja": "ヘッドハンター"
    },
    {
      "en": "Tour De Force",
      "zh": "孤高火力",
      "ja": "ツール・ド・フォース"
    }
  ],
  "Cypher": [
    {
      "en": "Cyber Cage",
      "zh": "赛博囚笼",
      "ja": "サイバーケージ"
    },
    {
      "en": "Spycam",
      "zh": "战术监控",
      "ja": "スパイカメラ"
    },
    {
      "en": "Trapwire",
      "zh": "震慑绊线",
      "ja": "トラップワイヤー"
    },
    {
      "en": "Neural Theft",
      "zh": "神经取析",
      "ja": "ニューラルセフト"
    }
  ],
  "Deadlock": [
    {
      "en": "Sonic Sensor",
      "zh": "声感陷阱",
      "ja": "ソニックセンサー"
    },
    {
      "en": "Barrier Mesh",
      "zh": "阻域屏障",
      "ja": "バリアメッシュ"
    },
    {
      "en": "GravNet",
      "zh": "重力捕网",
      "ja": "グラヴィネット"
    },
    {
      "en": "Annihilation",
      "zh": "断魂索道",
      "ja": "アナイアレーション"
    }
  ],
  "Killjoy": [
    {
      "en": "Nanoswarm",
      "zh": "纳米蜂群",
      "ja": "ナノスワーム"
    },
    {
      "en": "ALARMBOT",
      "zh": "自动哨兵",
      "ja": "アラームボット"
    },
    {
      "en": "TURRET",
      "zh": "哨戒炮台",
      "ja": "タレット"
    },
    {
      "en": "Lockdown",
      "zh": "全面封锁",
      "ja": "ロックダウン"
    }
  ],
  "Sage": [
    {
      "en": "Slow Orb",
      "zh": "薄冰",
      "ja": "スロウオーブ"
    },
    {
      "en": "Healing Orb",
      "zh": "逢春",
      "ja": "ヒーリングオーブ"
    },
    {
      "en": "Barrier Orb",
      "zh": "玉城",
      "ja": "バリアオーブ"
    },
    {
      "en": "Resurrection",
      "zh": "再起",
      "ja": "リザレクション"
    }
  ],
  "Veto": [
    {
      "en": "Interceptor",
      "zh": "噬源体",
      "ja": "インタセプター"
    },
    {
      "en": "Crosscut",
      "zh": "涡流折跃",
      "ja": "クロスカット"
    },
    {
      "en": "Evolution",
      "zh": "完全进化",
      "ja": "エヴォリューション"
    },
    {
      "en": "Chokehold",
      "zh": "裂变残片",
      "ja": "チョークホールド"
    }
  ],
  "Vyse": [
    {
      "en": "Shear",
      "zh": "裁断",
      "ja": "シアー"
    },
    {
      "en": "Arc Rose",
      "zh": "弧光玫瑰",
      "ja": "アークローズ"
    },
    {
      "en": "Razorvine",
      "zh": "剃刀藤蔓",
      "ja": "レーザーヴァイン"
    },
    {
      "en": "Steel Garden",
      "zh": "铁棘禁园",
      "ja": "スチールガーデン"
    }
  ]
};

const lineups = {
  aMainMolly: {
    tag: { en: "Easy", zh: "简单", ja: "簡単" },
    title: { en: "A Main Molly", zh: "A 大燃烧弹", ja: "A メイン モロトフ" },
    summary: {
      en: "Snake Bite / Post",
      zh: "蛇吻 / 残局",
      ja: "スネークバイト / 設置後",
    },
  },
  midOrbCloud: {
    tag: { en: "Medium", zh: "中等", ja: "中" },
    title: { en: "Mid Orb Cloud", zh: "中路球烟", ja: "ミッド オーブ スモーク" },
    summary: {
      en: "Poison Cloud / Attack",
      zh: "瘴云 / 进攻",
      ja: "ポイズンクラウド / 攻撃",
    },
  },
  bLaneSnakeBite: {
    tag: { en: "Easy", zh: "简单", ja: "簡単" },
    title: { en: "B Lane Snake Bite", zh: "B 通道蛇吻", ja: "B レーン スネークバイト" },
    summary: {
      en: "Snake Bite / Post",
      zh: "蛇吻 / 残局",
      ja: "スネークバイト / 設置後",
    },
  },
};

const details = {
  aMainMolly: {
    ability: "snakeBite",
    side: "Attack",
    difficulty: "Easy",
    timing: {
      en: "Throw after spike tap. Works from A Main without exposing to Heaven.",
      zh: "听到拆包声后投掷。可以从 A 大完成，不需要暴露给天堂位。",
      ja: "スパイク解除音の後に投げる。A メインからヘブンに体を晒さずに使える。",
    },
  },
  midOrbCloud: {
    ability: "poisonCloud",
    side: "Attack",
    difficulty: "Medium",
    timing: {
      en: "Use before mid split. Pick up after crossing to keep the second smoke cycle.",
      zh: "中路夹攻前使用。通过后回收，可保留第二轮烟雾循环。",
      ja: "ミッドスプリット前に使用。通過後に回収して2回目のスモークに備える。",
    },
  },
  bLaneSnakeBite: {
    ability: "snakeBite",
    side: "Post",
    difficulty: "Easy",
    timing: {
      en: "Throw on first defuse audio. Best when teammate holds Market swing.",
      zh: "第一次拆包声出现时投掷。队友架住市场拉出时效果最好。",
      ja: "最初の解除音に合わせて投げる。味方がマーケットからのピークを抑える時に有効。",
    },
  },
};

let currentLang = languageSelect?.value || "zh";
let selectedLineupId = "aMainMolly";
let mapRotation = 0;
let mapScale = 1;
let mapPanX = 0;
let mapPanY = 0;
let dragStart = null;

function t(key) {
  return translations[currentLang][key];
}

function localize(collection, key) {
  return collection[key]?.[currentLang] || collection[key]?.en || key;
}

function selectedMapName() {
  return mapSelect?.value || "Ascent";
}

function selectedAgentName() {
  return agentSelect?.value || "Viper";
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderMapSelect() {
  if (!mapSelect) return;
  const selected = selectedMapName();
  mapSelect.innerHTML = "";
  mapOrder.forEach((mapKey) => {
    const option = document.createElement("option");
    option.value = mapKey;
    option.textContent = maps[mapKey].names[currentLang];
    option.selected = mapKey === selected;
    mapSelect.append(option);
  });
}

function renderAgentSelect() {
  if (!agentSelect) return;
  const selected = selectedAgentName();
  agentSelect.innerHTML = "";
  roleOrder.forEach((roleKey) => {
    const group = document.createElement("optgroup");
    group.label = roles[roleKey][currentLang];
    agentOrder
      .filter((agentKey) => agents[agentKey].role === roleKey)
      .forEach((agentKey) => {
        const option = document.createElement("option");
        option.value = agentKey;
        option.textContent = agents[agentKey].names[currentLang];
        option.selected = agentKey === selected;
        group.append(option);
      });
    agentSelect.append(group);
  });
}

function updateStageEyebrow() {
  stageEyebrow.textContent = `${maps[selectedMapName()].names[currentLang]} / ${agents[selectedAgentName()].names[currentLang]}`;
}

function updateMapArt() {
  const mapKey = selectedMapName();
  const map = maps[mapKey] || maps.Ascent;
  mapImages.forEach((image) => {
    image.src = map.image;
    image.alt = `${map.names[currentLang]} tactical map`;
  });
}

function renderMapCallouts() {
  if (!mapLayer) return;
  mapLayer.querySelectorAll(".callout-label").forEach((label) => label.remove());

  const map = maps[selectedMapName()] || maps.Ascent;
  map.callouts.forEach((callout) => {
    const label = document.createElement("div");
    label.className = callout.spawn ? "callout-label spawn-label" : "callout-label";
    label.style.left = `${callout.left}%`;
    label.style.top = `${callout.top}%`;
    label.textContent = callout.names[currentLang];
    mapLayer.append(label);
  });
}

function updateAgentAvatar(agentName) {
  if (!agentAvatarImg) return;
  const agent = agents[agentName] || agents.Viper;
  agentAvatarImg.src = agent.icon;
  agentAvatarImg.alt = `${agent.names[currentLang]} agent icon`;
}

function renderAbilityList() {
  const abilityList = document.querySelector(".ability-list");
  if (!abilityList) return;
  abilityList.innerHTML = "";

  (abilities[selectedAgentName()] || abilities.Viper).forEach((ability, index) => {
    const label = document.createElement("label");
    label.className = "check-row";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = index < 4;

    const text = document.createElement("span");
    text.textContent = ability[currentLang];

    label.append(input, text);
    abilityList.append(label);
  });
}

function setSelected(id) {
  selectedLineupId = id;
  title.textContent = lineups[id].title[currentLang];

  const data = details[id];
  if (!data) return;

  const meta = document.querySelectorAll(".meta-grid strong");
  meta[0].textContent = t("sideValues")[data.side];
  meta[1].textContent = (abilities[selectedAgentName()] || abilities.Viper)[0][currentLang];
  meta[2].textContent = t("difficultyValues")[data.difficulty];
  document.querySelector(".notes p").textContent = data.timing[currentLang];
}

function renderStaticText() {
  document.documentElement.lang = t("documentLang");
  document.querySelector(".search input").placeholder = t("searchPlaceholder");
  document.querySelector(".top-actions").setAttribute("aria-label", t("primary"));
  document.querySelector(".sidebar").setAttribute("aria-label", t("filters"));
  document.querySelector(".map-stage").setAttribute("aria-label", t("mapStage"));
  detailsPanel?.setAttribute("aria-label", t("detailsPanel"));
  document.querySelector(".icon-button").setAttribute("aria-label", t("bookmarks"));
  document.querySelector(".icon-button").setAttribute("title", t("bookmarks"));
  document.querySelector(".profile-button").setAttribute("aria-label", t("profile"));
  document.querySelector(".map-select").setAttribute("aria-label", t("mapSelection"));
  document.querySelector(".agent-select").setAttribute("aria-label", t("agentSelection"));
  rotateButton.setAttribute("aria-label", t("rotate"));
  rotateButton.setAttribute("title", t("rotate"));
  zoomOutButton.setAttribute("aria-label", t("zoom")[0]);
  zoomInButton.setAttribute("aria-label", t("zoom")[1]);

  themeButtons[0].textContent = t("themeDark");
  themeButtons[1].textContent = t("themeLight");
  [...document.querySelectorAll(".section-title")].forEach((item, index) => {
    item.textContent = t("sections")[index];
  });
  sourceTabs.forEach((item, index) => {
    item.textContent = t("sources")[index];
  });
  [...document.querySelectorAll(".segmented button")].forEach((item, index) => {
    item.textContent = t("scenarios")[index];
  });
  sideTabs.forEach((item, index) => {
    item.textContent = t("sides")[index];
  });
  [...document.querySelectorAll(".option-list span")].forEach((item, index) => {
    item.textContent = t("toggles")[index];
  });
  stageTitle.textContent = t("stageTitle");
  [...document.querySelectorAll(".stage-actions .tool-button")].forEach((item, index) => {
    item.textContent = t("tools")[index];
  });
  setText(".lineup-summary .eyebrow", t("selectedLineup"));
  const isSaved = saveLineupButton?.getAttribute("aria-pressed") === "true";
  const saveLabel = isSaved ? t("unsaveLineup") : t("saveLineup");
  saveLineupButton?.setAttribute("aria-label", saveLabel);
  saveLineupButton?.setAttribute("title", saveLabel);
  closeDetailsButton?.setAttribute("aria-label", t("closeDetails"));
  closeDetailsButton?.setAttribute("title", t("closeDetails"));
  [...document.querySelectorAll(".meta-grid small")].forEach((item, index) => {
    item.textContent = t("metaLabels")[index];
  });
  [...document.querySelectorAll(".steps .step span")].forEach((item, index) => {
    item.textContent = t("stepLabels")[index];
  });
  [...document.querySelectorAll(".steps .step strong")].forEach((item, index) => {
    item.textContent = t("stepValues")[index];
  });
  setText(".primary-action", t("actions")[0]);
  setText(".secondary-action", t("actions")[1]);
  setText(".notes strong", t("timing"));
}

function renderLanguage() {
  renderStaticText();
  renderMapSelect();
  renderAgentSelect();
  renderAbilityList();
  updateMapArt();
  renderMapCallouts();
  updateStageEyebrow();
  updateAgentAvatar(selectedAgentName());
  setSelected(selectedLineupId);
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

function handleLanguageChange() {
  currentLang = languageSelect.value;
  renderLanguage();
}

languageSelect?.addEventListener("change", handleLanguageChange);
languageSelect?.addEventListener("input", handleLanguageChange);

agentSelect?.addEventListener("change", () => {
  const agentName = agentSelect.value;
  agentAvatar.dataset.agent = agentName;
  updateAgentAvatar(agentName);
  renderAbilityList();
  updateStageEyebrow();
  setSelected(selectedLineupId);
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeOption;
    document.body.dataset.theme = theme;
    themeButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

mapSelect?.addEventListener("change", () => {
  updateMapArt();
  renderMapCallouts();
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

saveLineupButton?.addEventListener("click", () => {
  const isSaved = saveLineupButton.getAttribute("aria-pressed") === "true";
  saveLineupButton.setAttribute("aria-pressed", String(!isSaved));
  saveLineupButton.classList.toggle("is-saved", !isSaved);
  const label = !isSaved ? t("unsaveLineup") : t("saveLineup");
  saveLineupButton.setAttribute("aria-label", label);
  saveLineupButton.setAttribute("title", label);
});

closeDetailsButton?.addEventListener("click", () => {
  appShell?.classList.add("details-closed");
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

renderLanguage();
applyMapTransform();
