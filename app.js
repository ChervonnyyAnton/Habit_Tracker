/*
  замаскировать все, кроме последних 4х символов карты
*/

const card = "2342834503453353";

function coverCardNumber(number){
  let trimmedNumber = number.trim();
  if(!isNaN(Number(trimmedNumber))){
    return trimmedNumber
      .slice(trimmedNumber.length - 4, trimmedNumber.length)
      .padStart(trimmedNumber.length, '*');
  }
  else{
    console.log("It is not a valid number");
  }
}

console.log(coverCardNumber(card));

//решение автора -_-
console.log(card.slice(-4).padStart(card.length, '*'));