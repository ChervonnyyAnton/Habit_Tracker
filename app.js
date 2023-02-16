/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/


const age = Number(prompt('Введите ваш возраст'));
const hasJob = Boolean(confirm('Есть ли у вас работа?'));
const availableMoney = Number(prompt('Сколько у вас денег?'));
const targetPrice = Number(prompt('Сколько стоит товар?'));

function getCredit(age, hasJob) 
{
	switch(true)
	{
		case age > 24 && hasJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}
}

const finalAmount = availableMoney + getCredit(age, hasJob);

const canAfford = finalAmount >= targetPrice;

const message = canBuy => canBuy ? 'Вы можете купить товар' : 'Вы не можете купить товар';

console.log(message(canAfford));