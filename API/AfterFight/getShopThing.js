// var equMaxLen = 55;
// var skillMaxLen = 31;
// var equComMaxIndex = 23;
// var equValMaxIndex = 37;
// var equEpicMaxIndex = 46;
// var equShenMaxIndex = 51;
// var equLedMaxIndex = 54;
// var skillComMaxIndex = 13;
// var skillValMaxIndex = 21;
// var skillEpicMaxIndex = 25;
// var skillShenMaxIndex = 28;
// var skillLedMaxIndex = 30;

//目前仍然有bug 因为可能会出现 当你购买了高品质物品之后 点击刷新会卡死 估计是进死循环了。


function judgeInArr(arr, index, type){
  if(arr.length===0){
    return false;
  }
  for(let i = 0; i<arr.length; ++i){
    if(type==="装备"){
      if(arr[i].id === index+100){
        return true;
      }
    }else if(type==="技能"){
      if(arr[i].id === index+200){
        return true;
      }
    }
  }
  return false;
}


function highQuaInEqu(index, arr){//专供检查装备的检查函数。也需要做防止重复。
  if(index >= 47){
    for(let i = 0; i<arr.length; ++i){
      if(index+100 === arr[i].id){
        return true;
      }
    }
  }
  return false;
}



function getShopThing(nowLock, nowEqu, nowSkill, cengNum, lenNeed){
  //改为返回数组 数组中不会返回相同/已经拥有的技能的元素
  //装备几率要比技能大
  let type;
  let arrRe = [];
  let index;
  for(let i = 0; i<lenNeed; ++i){//针对整个arr的循环
    type = Math.floor(Math.random()*3)<=1?"装备":"技能";
    if(type==="装备"){
      if(cengNum<=3){
        index = Math.floor(Math.random()*24);//获取index
        while(judgeInArr(nowLock, index, "装备")||judgeInArr(arrRe, index, "装备")){
          index = Math.floor(Math.random()*24);
        }
        arrRe.push(equipmentList[index]);
      }else if(cengNum<=5){
        index = Math.floor(Math.random()*38);//获取index 
        while(judgeInArr(nowLock, index, "装备")||judgeInArr(arrRe, index, "装备")){
          index = Math.floor(Math.random()*38);
        }
        arrRe.push(equipmentList[index]);
      }else{//全 加上限制已经买了的神话与传说仅可买一件 一旦买了就不会在商店中刷新出来了。
        index = Math.floor(Math.random()*55);//获取index
        while(judgeInArr(nowLock, index, "装备")||judgeInArr(arrRe, index, "装备")||highQuaInEqu(index, nowEqu)){
          index = Math.floor(Math.random()*55);//获取index
        }
        arrRe.push(equipmentList[index]);
      }
    }else if(type==="技能"){
      if(cengNum<=3){
        index = Math.floor(Math.random()*14);//获取index
        while(judgeInArr(nowLock, index, "技能")||judgeInArr(arrRe, index, "技能")||judgeInArr(nowSkill, index, "技能")){
        index = Math.floor(Math.random()*14);
        }
        arrRe.push(skillList[index]);
      }else if(cengNum<=5){
        index = Math.floor(Math.random()*26);//获取index
        while(judgeInArr(nowLock, index, "技能")||judgeInArr(arrRe, index, "技能")||judgeInArr(nowSkill, index, "技能")){
          index = Math.floor(Math.random()*26);
        }
        arrRe.push(skillList[index]);
      }else{
        index = Math.floor(Math.random()*31);//获取index 
        while(judgeInArr(nowLock, index, "技能")||judgeInArr(arrRe, index, "技能")||judgeInArr(nowSkill, index, "技能")){
          index = Math.floor(Math.random()*31);
        }
        arrRe.push(skillList[index]);
      }
    }
  }
  
  return arrRe;//返回生成的数组。
}