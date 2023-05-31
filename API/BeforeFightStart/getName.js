function getEnemyName(){
  var mode = Math.floor(Math.random()*4); //产生0-3的随机数
  var rev = Math.floor(Math.random()*2)===1?true:false; //产生true/false
  var length = Math.floor(Math.random()*5 + 1); //产生1-5之间的随机数
  if(length==1){
    ++length;
  }

  var mode0Arr = [
    ["碎", "吞", "逐", "御", "困", "灭", "屠", "斩", "牧"],
    ["星", "圣", "雷", "恶", "罚", "元", "龙", "灭", "灵"],
    "者"
  ];//xx者
  var mode1Arr = [
    ["白", "赤", "青", "银", "霜", "炎", "影"],
    ["袍", "矛", "刃", "枪", "锤", "弓", "盾"]
  ];//xx
  var mode2Arr = [
    ["永恒", "光耀", "创世", "无畏", "暗耀", "归一", "寂灭"],
    ["雷霆", "狱火", "山岳", "奇点", "辉腾", "憎恶", "毒泽"]
  ];//xxxx
  var mode3Arr = [
    ["梅捷洛斯", "阿亚伐尔", "莫德兹", "临冬堡", "迪斯卡丹", "莫里尖峰", "渊狱"],
    "之",
    ["心", "殇", "王", "盾", "刃", "手", "主"]
  ];//xx之x
  var nameArr = [
    ["梅", "阿", "斯", "勃", "莫", "罗", "敏"],
    ["兹", "卡", "丹", "洛", "维", "里", "英"],
    ["玛", "伦", "诺", "森", "安", "尔", "多"],
    ["捷", "基", "索", "布", "希", "夫", "姆"],
    ["艾", "萨", "拉", "法", "奥", "列", "特"],
    ["库", "拉", "顿", "格", "德", "琳", "克"],
    ["桑", "托", "米", "尼", "亚", "瑟", "威"]
  ];
  var name = "";
  let i = 0;
  var nameIndex1;
  var nameIndex2;

  //47 64 79 92 102 119
  switch (mode) {
    case 0:{
      if(rev){
        for(i=0; i<length; ++i){
          nameIndex1 = Math.floor(Math.random()*7);
          nameIndex2 = Math.floor(Math.random()*7);
          name+=nameArr[nameIndex1][nameIndex2];
        }
        name+=",";
        nameIndex1 = Math.floor(Math.random()*9);
        nameIndex2 = Math.floor(Math.random()*9);
        name+=mode0Arr[0][nameIndex1];
        name+=mode0Arr[1][nameIndex2];
        name+=mode0Arr[2];
      }else{
        nameIndex1 = Math.floor(Math.random()*9);
        nameIndex2 = Math.floor(Math.random()*9);
        name+=mode0Arr[0][nameIndex1];
        name+=mode0Arr[1][nameIndex2];
        name+=mode0Arr[2];
        for(i=0; i<length; ++i){
          nameIndex1 = Math.floor(Math.random()*7);
          nameIndex2 = Math.floor(Math.random()*7);
          name+=nameArr[nameIndex1][nameIndex2];
        }
      }
      
      return name;
    } 
  
    case 1:{
      nameIndex1 = Math.floor(Math.random()*7);
      nameIndex2 = Math.floor(Math.random()*7);
      name+=mode1Arr[0][nameIndex1];
      name+=mode1Arr[1][nameIndex2];
      for(i=0; i<length; ++i){
        nameIndex1 = Math.floor(Math.random()*7);
        nameIndex2 = Math.floor(Math.random()*7);
        name+=nameArr[nameIndex1][nameIndex2];
      }
      return name;
    }

    case 2:{
      nameIndex1 = Math.floor(Math.random()*7);
      nameIndex2 = Math.floor(Math.random()*7);
      name+=mode2Arr[0][nameIndex1];
      name+=mode2Arr[1][nameIndex2];
      for(i=0; i<length; ++i){
        nameIndex1 = Math.floor(Math.random()*7);
        nameIndex2 = Math.floor(Math.random()*7);
        name+=nameArr[nameIndex1][nameIndex2];
      }
      return name;
    }

    case 3:{
      if(rev){
        for(i=0; i<length; ++i){
          nameIndex1 = Math.floor(Math.random()*7);
          nameIndex2 = Math.floor(Math.random()*7);
          name+=nameArr[nameIndex1][nameIndex2];
        }
        name+=",";
        nameIndex1 = Math.floor(Math.random()*7);
        nameIndex2 = Math.floor(Math.random()*7);
        name+=mode3Arr[0][nameIndex1];
        name+=mode3Arr[1];
        name+=mode3Arr[2][nameIndex2];
      }else{
        nameIndex1 = Math.floor(Math.random()*7);
        nameIndex2 = Math.floor(Math.random()*7);
        name+=mode3Arr[0][nameIndex1];
        name+=mode3Arr[1];
        name+=mode3Arr[2][nameIndex2];
        for(i=0; i<length; ++i){
          nameIndex1 = Math.floor(Math.random()*7);
          nameIndex2 = Math.floor(Math.random()*7);      
          name+=nameArr[nameIndex1][nameIndex2];       
        }
      }
      
      return name;
    }

    default:
      return "你的敌人"
  }
}