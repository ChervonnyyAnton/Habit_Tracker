/*
	Вася положил 12000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
	Выведи в консоль, сможет ли он купить дом за 13500$ через 2 года после снятия вклада.
	Выведи в консоль остаток после покупки.

	Итог = Сумма * (1 + ставка в месяц не в %) возведенная в степен срока в месяцах.
*/

const deposit = 12000;
const percent = 7;
const capitalization = (percent / 100) / 12;
const term = 24;
const house = 13500;

let result = deposit * (1 + capitalization) ** term;

if(result >= house) {
	console.log(`Вася может купить дом и у него останется $${result - house}`);
} else {
	console.log('Вася не может купить дом');
}