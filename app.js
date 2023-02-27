/*
  Найти среднее в массиве используя только reduce
*/

const arr = [1, 4, 4, 10];

const avg = arr.reduce((prev, curr) => prev += curr) / arr.length; 

console.log(avg);

const avg1 = arr.reduce((acc, curr, index) => {
  if(index != arr.length -1){
    return acc += curr;
  }
  else {
    return (acc + curr) / arr.length;
  }
});

console.log(avg1);