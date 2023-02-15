/*
	Пользователь хочет приобрести игру в магазине.
	Он может это сделаь тольк если:
	- Его баланс больше 1000 или число бонусов больше 100
	- Он не забанен
	- Игра не куплена
	- Игра в продаже

	Напишите условие для покупки и выведите в консоль результат
*/

const balance = 1000;
const bonus = 100;

let myBalance = prompt('Введите ваш баланс');
let myBonus = prompt('Введите количество бонусов');
let isBanned = confirm('Вы забанены?');
let isGamePurchased = confirm('Вы купили игру?');
let isGameOnSale = confirm('Игра в продаже?');

let canBuyGame = (myBalance >= balance || myBonus >= bonus) && !isBanned && !isGamePurchased && isGameOnSale;

console.log(canBuyGame ? 'Вы можете купить игру' : 'Вы не можете купить игру');