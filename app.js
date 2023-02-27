/*
  функция, которая возвращает true, если элемент есть в массиве и 
  false, если элемент не найден.
*/

const arr = [1, 4, 4, 5, 10];
const exp = 5;

function some (array, value) {
  return array.findIndex(el => el === value) >= 0;
}

console.log(some(arr, exp));
console.log(arr.some(el => el === exp));