/*
  определить является ли номер действительным в РФ
*/

// верные

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7 (910) 3235356';
const num4 = '+7 (910) 323-53-56';
const num5 = '+7 (910) 323-53-56  ';

// не верные

const numError = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isNumber(num){
  return !isNaN(Number(num));
}

function startsWithEight(num){
  return num.startsWith('8');
}

function cleanNum(num){
  let noSpaces = num.replaceAll(' ', '');
  let noLeftBrace = noSpaces.replaceAll('(', '');
  let noRightBrace = noLeftBrace.replaceAll(')', '');
  let clean = noRightBrace.replaceAll('-', '');
  let changePlusSeven = clean.replaceAll('+7', 8);
  return changePlusSeven;
}

function lengthIsOk(num){
  return num.length === 11;
}

function isValid(num){
  let cleanedNum = cleanNum(num);
  return startsWithEight(cleanedNum) && lengthIsOk(cleanedNum) && isNumber(cleanedNum);
}

function validateNumbers(arr){
  let newArray = new Array();
  for(let i = 0; i < arr.length; i++){
    let smallArray = new Array(arr[i], isValid(arr[i]));
    newArray.push(smallArray);
  }

  return newArray;
}

const ArrayOfNumbers = new Array(num1, num2, num3, num4, num5, numError, num2Error, num3Error, num4Error);

console.log(validateNumbers(ArrayOfNumbers));