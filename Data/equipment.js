//当前设计 55个 3传说(152-154) 5神话(147-151) 8史诗(138-146) 14稀有(124-137) 24普通(100-123)
//普通性价为-1 稀有为-2 史诗为-3
var equipmentList = [
  {
    id: 100,
    name: "布甲",
    desc: "物理防御+1",
    quality: "普通",
    type: "装备",
    buy: 16,
    isLock: false,
  },
  {
    id: 101,
    name: "铁剑",
    desc: "物理攻击+1",
    quality: "普通",
    type: "装备",
    buy: 14,
    isLock: false,
  },
  {
    id: 102,
    name: "魔石",
    desc: "法术攻击+1",
    quality: "普通",
    type: "装备",
    buy: 18,
    isLock: false,
  },
  {
    id: 103,
    name: "防护项链",
    desc: "法术防御+1",
    quality: "普通",
    type: "装备",
    buy: 19,
    isLock: false,
  },
  {
    id: 104,
    name: "渊狱石碎片",
    desc: "吸血+0.08",
    quality: "普通",
    type: "装备",
    buy: 24,
    isLock: false,
  },
  {
    id: 105,
    name: "闪影靴",
    desc: "闪避率+0.01",
    quality: "普通",
    type: "装备",
    buy: 23,
    isLock: false,
  },
  {
    id: 106,
    name: "暴怒之戒",
    desc: "暴击率+0.08",
    quality: "普通",
    type: "装备",
    buy: 24,
    isLock: false,
  },
  {
    id: 107,
    name: "荆棘板甲",
    desc: "物理攻击+2，物理防御+2，法术防御-4",
    quality: "普通",
    type: "装备",
    buy: 32,
    isLock: false,
  },
  {
    id: 108,
    name: "呓语水晶球",
    desc: "法术攻击+3，闪避率-0.01",
    quality: "普通",
    type: "装备",
    buy: 30,
    isLock: false,
  },
  {
    id: 109,
    name: "破碎的君主之刃",
    desc: "物理攻击+5，物理防御-2，法术防御-1",
    quality: "普通",
    type: "装备",
    buy: 19,
    isLock: false,
  },
  {
    id: 110,
    name: "破碎的上古戒指",
    desc: "物理攻击+1，物理防御+1，暴击率+0.04",
    quality: "普通",
    type: "装备",
    buy: 40,
    isLock: false,
  },
  {
    id: 111,
    name: "血腥棘刺",
    desc: "暴击效果+0.1",
    quality: "普通",
    type: "装备",
    buy: 15,
    isLock: false,
  },
  {
    id: 112,
    name: "迷人的伪装",
    desc: "法术攻击+2，暴击率+0.03，闪避率-0.01",
    quality: "普通",
    type: "装备",
    buy: 24,
    isLock: false,
  },
  {
    id: 113,
    name: "碧玉核心",
    desc: "法术防御+2，物理防御+2，闪避率-0.01",
    quality: "普通",
    type: "装备",
    buy: 46,
    isLock: false,
  },
  {
    id: 114,
    name: "不祥护腕",
    desc: "暴击率+0.1，暴击效果+0.1，物理攻击-1",
    quality: "普通",
    type: "装备",
    buy: 38,
    isLock: false,
  },
  {
    id: 115,
    name: "开山刀",
    desc: "物理攻击+4，最大生命值+10",
    quality: "普通",
    type: "装备",
    buy: 63,
    isLock: false,
  },
  {
    id: 116,
    name: "护心甲",
    desc: "最大生命值+10，物理防御+1",
    quality: "普通",
    type: "装备",
    buy: 32,
    isLock: false,
  },
  {
    id: 117,
    name: "镜面甲",
    desc: "物理防御+1，闪避率+0.01，最大生命值+20",
    quality: "普通",
    type: "装备",
    buy: 82,
    isLock: false,
  },
  {
    id: 118,
    name: "闪烁的长矛",
    desc: "物理攻击+6，闪避率-0.03",
    quality: "普通",
    type: "装备",
    buy: 60,
    isLock: false,
  },
  {
    id: 119,
    name: "辉耀圣剑的残柄",
    desc: "物理攻击+15，物理防御-5",
    quality: "普通",
    type: "装备",
    buy: 35,
    isLock: false,
  },
  {
    id: 120,
    name: "啸风巨狼之牙",
    desc: "物理攻击+2，暴击率+0.1",
    quality: "普通",
    type: "装备",
    buy: 51,
    isLock: false,
  },
  {
    id: 121,
    name: "庇护之甲",
    desc: "法术防御+3，物理攻击-1",
    quality: "普通",
    type: "装备",
    buy: 42,
    isLock: false,
  },
  {
    id: 122,
    name: "和平戒指",
    desc: "法术防御+3，暴击率-0.08",
    quality: "普通",
    type: "装备",
    buy: 32,
    isLock: false,
  },
  {
    id: 123,
    name: "异端之杖",
    desc: "最大生命值-10，法术攻击+15",
    quality: "普通",
    type: "装备",
    buy: 40,
    isLock: false,
  },
  {
    id: 124,
    name: "硬甲",
    desc: "物理防御+5",
    quality: "稀有",
    type: "装备",
    buy: 42,
    isLock: false,
  },
  {
    id: 125,
    name: "巨剑",
    desc: "物理攻击+5",
    quality: "稀有",
    type: "装备",
    buy: 40,
    isLock: false,
  },
  {
    id: 126,
    name: "禁断之牙",
    desc: "法术攻击-2，吸血+0.2",
    quality: "稀有",
    type: "装备",
    buy: 16,
    isLock: false,
  },
  {
    id: 127,
    name: "万金油",
    desc: "物理攻击+3，法术攻击+3，物理防御+3，法术防御+3",
    quality: "稀有",
    type: "装备",
    buy: 68,
    isLock: false,
  },
  {
    id: 128,
    name: "祖咒封印",
    desc: "吸血-0.16，法术防御+5",
    quality: "稀有",
    type: "装备",
    buy: 28,
    isLock: false,
  },
  {
    id: 129,
    name: "绝情护甲",
    desc: "暴击效果-0.2，法术防御+4，物理防御+4",
    quality: "稀有",
    type: "装备",
    buy: 42,
    isLock: false,
  },
  {
    id: 130,
    name: "棘背巨龙之鳞",
    desc: "暴击率-0.08，法术攻击-2，吸血+0.32",
    quality: "稀有",
    type: "装备",
    buy: 60,
    isLock: false,
  },
  {
    id: 131,
    name: "清风剑",
    desc: "物理攻击+4，法术防御+2",
    quality: "稀有",
    type: "装备",
    buy: 82,
    isLock: false,
  },
  {
    id: 132,
    name: "魔精法杖",
    desc: "法术攻击+4，物理防御+2",
    quality: "稀有",
    type: "装备",
    buy: 84,
    isLock: false,
  },
  {
    id: 133,
    name: "耀斑鸟之眼",
    desc: "暴击效果+0.2，物理攻击-3",
    quality: "稀有",
    type: "装备",
    buy: 25,
    isLock: false,
  },
  {
    id: 134,
    name: "霜雪之咬",
    desc: "物理攻击+3，法术攻击+3，物理防御-3，法术防御-3",
    quality: "稀有",
    type: "装备",
    buy: 12,
    isLock: false,
  },
  {
    id: 135,
    name: "焰炙之赐",
    desc: "物理防御+3，法术防御+3，物理攻击-3，法术攻击-3",
    quality: "稀有",
    type: "装备",
    buy: 12,
    isLock: false,
  },
  {
    id: 136,
    name: "不死图腾",
    desc: "最大生命值+70",
    quality: "稀有",
    type: "装备",
    buy: 100,
    isLock: false,
  },
  {
    id: 137,
    name: "春日祈祷",
    desc: "闪避率+0.1，法术攻击+2",
    quality: "稀有",
    type: "装备",
    buy: 90,
    isLock: false,
  },
  {
    id: 138,
    name: "渊狱花",
    desc: "吸血+0.2，法术攻击+8，物理防御-2",
    quality: "史诗",
    type: "装备",
    buy: 95,
    isLock: false,
  },
  {
    id: 139,
    name: "末日裂隙之铠",
    desc: "物理防御+8，法术防御+8，吸血-0.2",
    quality: "史诗",
    type: "装备",
    buy: 100,
    isLock: false,
  },
  {
    id: 140,
    name: "彼岸斗篷",
    desc: "闪避率+0.1，暴击效果+0.3",
    quality: "史诗",
    type: "装备",
    buy: 100,
    isLock: false,
  },
  {
    id: 141,
    name: "光阴之手",
    desc: "暴击率+0.2，暴击效果+0.3",
    quality: "史诗",
    type: "装备",
    buy: 124,
    isLock: false,
  },
  {
    id: 142,
    name: "北境统领之甲",
    desc: "物理防御+10，法术防御+10，最大生命值+30",
    quality: "史诗",
    type: "装备",
    buy: 256,
    isLock: false,
  },
  {
    id: 143,
    name: "斩圣之剑",
    desc: "物理攻击+15，法术防御+4",
    quality: "史诗",
    type: "装备",
    buy: 236,
    isLock: false,
  },
  {
    id: 144,
    name: "摄魂之杖",
    desc: "法术攻击+13，物理防御+6",
    quality: "史诗",
    type: "装备",
    buy: 236,
    isLock: false,
  },
  {
    id: 145,
    name: "旧日遗忘",
    desc: "最大生命值+100，暴击效果+0.3，暴击率+0.16",
    quality: "史诗",
    type: "装备",
    buy: 230,
    isLock: false,
  },
  {
    id: 146,
    name: "颂唱者",
    desc: "法术防御+5，物理防御+5，闪避率+0.08，暴击率+0.08，暴击效果+0.1",
    quality: "史诗",
    type: "装备",
    buy: 190,
    isLock: false,
  },
  {
    id: 147,
    name: "末日号角",
    desc: "装备后：你的攻击必定暴击。若是装备时暴击率已经不小于0.65，则额外永久获得：物理攻击+20，法术攻击+20。(即出售后仍有效)",
    quality: "神话",
    type: "装备",
    buy: 420,
    isLock: false,
  },
  {
    id: 148,
    name: "辉映重铠",
    desc: "物理防御+10，法术防御+10。装备后：你受到的攻击永久减少50%，向上取整。",
    quality: "神话",
    type: "装备",
    buy: 550,
    isLock: false,
  },
  {
    id: 149,
    name: "冰封圣杖",
    desc: "法术攻击+25。装备后：如果你造成的攻击数值为偶数，则点击结束回合后跳过对手的下回合。",
    quality: "神话",
    type: "装备",
    buy: 550,
    isLock: false,
  },
  {
    id: 150,
    name: "试锋",
    desc: "物理攻击+25，装备后：你造成的攻击不会被闪避。",
    quality: "神话",
    type: "装备",
    buy: 300,
    isLock: false,
  },
  {
    id: 151,
    name: "彼岸之镜",
    desc: "最大生命值+100。装备后：你的自然属性成长变为原来的1.25倍。",
    quality: "神话",
    type: "装备",
    buy: 280,
    isLock: false,
  },
  {
    id: 152,
    name: "八角琉璃盏",
    desc: "装备后：如果你连续5个回合没有受到伤害，那么在第六回合，消灭你的对手。",
    quality: "传说",
    type: "装备",
    buy: 600,
    isLock: false,
  },
  {
    id: 153,
    name: "渊狱王冠",
    desc: "装备后：每场对战限一次，死亡后立刻满状态复活。",
    quality: "传说",
    type: "装备",
    buy: 600,
    isLock: false,
  },
  {
    id: 154,
    name: "寂灭虚空",
    desc: "装备后：你的最大行动点数变为20点。",
    quality: "传说",
    type: "装备",
    buy: 600,
    isLock: false,
  },
]
