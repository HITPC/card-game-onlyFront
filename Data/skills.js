var skillList = [
  {
    id: 200,
    name: "普通一拳",
    desc: "造成等同于你的'物理伤害'点物理伤害",
    quality: "普通",
    type: "技能",
    buy: 19,
    cost: 3,
    isLock: false,
  },
  {
    id: 201,
    name: "普通格挡",
    desc: "在本局对战中获得+10%'物理防御'",
    quality: "普通",
    type: "技能",
    buy: 19,
    cost: 3,
    isLock: false,
  },
  {
    id: 202,
    name: "普通法球",
    desc: "造成等同于你的'法术伤害'点法术伤害",
    quality: "普通",
    type: "技能",
    buy: 19,
    cost: 3,
    isLock: false,
  },
  {
    id: 203,
    name: "普通防护",
    desc: "在本局对战中获得+10%'法术防御'",
    quality: "普通",
    type: "技能",
    buy: 19,
    cost: 3,
    isLock: false,
  },
  {
    id: 204,
    name: "嗜血",
    desc: "你的下一次攻击额外获得0.5的吸血效果",
    quality: "普通",
    type: "技能",
    cost: 6,
    buy: 50,
    isLock: false,
  },
  {
    id: 205,
    name: "回复术",
    desc: "回复4.5%最大生命值 点生命值",
    quality: "普通",
    type: "技能",
    cost: 1,
    buy: 26,
    isLock: false,
  },
  {
    id: 206,
    name: "怒火中烧",
    desc: "你的下一次物理攻击必定暴击",
    quality: "普通",
    type: "技能",
    cost: 5,
    buy: 65,
    isLock: false,
  },
  {
    id: 207,
    name: "削弱",
    desc: "在本局对战中减少对手10%'物理攻击'点'物理攻击'",
    quality: "普通",
    type: "技能",
    cost: 4,
    buy: 40,
    isLock: false,
  },
  {
    id: 208,
    name: "破防",
    desc: "在本局对战中减少对手10%'物理防御'点'物理防御'",
    quality: "普通",
    type: "技能",
    cost: 4,
    buy: 40,
    isLock: false,
  },
  {
    id: 209,
    name: "恐吓",
    desc: "在本局对战中减少对手10%'法术防御'点'法术防御'",
    quality: "普通",
    type: "技能",
    cost: 4,
    buy: 40,
    isLock: false,
  },
  {
    id: 210,
    name: "嘲讽",
    desc: "在本局对战中减少对手10%'法术攻击'点'法术攻击'",
    quality: "普通",
    type: "技能",
    cost: 4,
    buy: 40,
    isLock: false,
  },
  {
    id: 211,
    name: "无蓄力一拳",
    desc: "造成等同于你的'物理攻击'*0.65的物理伤害",
    quality: "普通",
    type: "技能",
    buy: 24,
    cost: 2,
    isLock: false,
  },
  {
    id: 212,
    name: "无蓄力冲击",
    desc: "造成等同于你的'法术攻击'*0.65的法术伤害",
    quality: "普通",
    type: "技能",
    buy: 24,
    cost: 2,
    isLock: false,
  },
  {
    id: 213,
    name: "双重叠甲",
    desc: "在本局对战中获得+10%基础物理防御，+10%基础法术防御",
    quality: "普通",
    type: "技能",
    cost: 3,
    buy: 66,
    isLock: false,
  },
  {
    id: 214,
    name: "盾反",
    desc: "造成等同于自身'物理防御'点数的物理伤害",
    quality: "稀有",
    type: "技能",
    buy: 60,
    cost: 4,
    isLock: false,
  },
  {
    id: 215,
    name: "另类的盾反",
    desc: "造成等同于自身'物理防御'点数的法术伤害",
    quality: "稀有",
    type: "技能",
    cost: 4,
    buy: 60,
    isLock: false,
  },
  {
    id: 216,
    name: "篷反",
    desc: "造成等同于自身'法术防御'点数的法术伤害",
    quality: "稀有",
    type: "技能",
    cost: 4,
    buy: 60,
    isLock: false,
  },
  {
    id: 217,
    name: "另类的篷反",
    desc: "造成等同于自身'法术防御'点数的物理伤害",
    quality: "稀有",
    type: "技能",
    cost: 4,
    buy: 60,
    isLock: false,
  },
  {
    id: 218,
    name: "血誓诅咒",
    desc: "你的下一次攻击获得的吸血效果翻倍",
    quality: "稀有",
    type: "技能",
    cost: 2,
    buy: 80,
    isLock: false,
  },
  {
    id: 219,
    name: "闪避",
    desc: "直到你的下回合，你的闪避+0.2",
    quality: "稀有",
    type: "技能",
    cost: 4,
    buy: 65,
    isLock: false,
  },
  {
    id: 220,
    name: "法术核心",
    desc: "直到你的下回合，你的对手的法术攻击对你无效",
    quality: "稀有",
    type: "技能",
    buy: 92,
    cost: 6,
    isLock: false,
  },
  {
    id: 221,
    name: "物理核心",
    desc: "直到你的下回合，你的对手的物理攻击对你无效",
    quality: "稀有",
    type: "技能",
    cost: 6,
    buy: 92,
    isLock: false,
  },
  {
    id: 222,
    name: "大记忆恢复术",
    desc: "将你的生命值恢复至其上个回合时的状态",
    quality: "史诗",
    type: "技能",
    cost: 7,
    buy: 468,
    isLock: false,
  },
  {
    id: 223,
    name: "超模的恢复术",
    desc: "恢复自身20%点最大生命值，并在本局获得+5%基础物理防御，+5%基础法术防御",
    quality: "史诗",
    type: "技能",
    cost: 8,
    buy: 168,
    isLock: false,
  },
  {
    id: 224,
    name: "神圣洗礼",
    desc: "消耗你剩余的行动力，被消耗的行动力会留到下个回合供你使用。",
    quality: "史诗",
    type: "技能",
    cost: 0,
    buy: 446,
    isLock: false,
  },
  {
    id: 225,
    name: "冬日寒霜",
    desc: "直到你的下回合，你受到的伤害减半。",
    quality: "史诗",
    type: "技能",
    cost: 6,
    buy: 308,
    isLock: false,
  },
  {
    id: 226,
    name: "永恒祭祀",
    desc: "交换你与对手的生命值(不会超过生命值上限)",
    quality: "神话",
    type: "技能",
    cost: 5,
    buy: 750,
    isLock: false,
  },
  {
    id: 227,
    name: "造物奇迹",
    desc: "回复你的所有生命值，对你的对手造成等同于你回复的生命值的50%的法术伤害。",
    quality: "神话",
    type: "技能",
    cost: 10,
    buy: 800,
    isLock: false,
  },
  {
    id: 228,
    name: "八方云雨",
    desc: "你的下一次伤害无视防御。",
    quality: "神话",
    type: "技能",
    cost: 0,
    buy: 750,
    isLock: false,
  },
  {
    id: 229,
    name: "虚空融合",
    desc: "直到你的下个回合，你获得免疫。",
    quality: "传说",
    type: "技能",
    cost: 10,
    buy: 600,
    isLock: false,
  },
  {
    id: 230,
    name: "破碎次元",
    desc: "消灭你的对手",
    quality: "传说",
    type: "技能",
    cost: 30,
    buy: 600,
    isLock: false,
  },
]