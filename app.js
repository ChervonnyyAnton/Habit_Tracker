/*
	Задача вывести в консоль строку "Я люблю JS !" из массива,
	проходя циклом в обратном порядке, не используя метод reverse.
*/

const arr = ['!','JS', 'люблю', 'Я'];
const newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
	newArr.push(arr[i]);
}

console.log(newArr.join(' '));