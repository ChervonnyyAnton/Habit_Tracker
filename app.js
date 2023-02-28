/*
  вытащить имя из строки
*/

const userName = "Вася aka Терминатор Пупкин";

function findSpaceFrom(text, side) {
  if(side.includes("front")){
    return text.indexOf(" ");
  }

  if(side.includes("back")){
    return text.lastIndexOf(" ");
  }

  return 0;
}

function extractFirstNameFrom(Text){
  return Text.slice(0, findSpaceFrom(Text, "front"));
}

function extractLastNameFrom(Text){
  return Text.slice(findSpaceFrom(Text, "back") + 1, Text.length);
}

const extractUserName = (userName) => `${extractFirstNameFrom(userName)} ${extractLastNameFrom(userName)}`

console.log(`Имя: ${extractUserName(userName)}`);