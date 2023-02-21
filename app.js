/* 
	Есть выгрузка операций пользователя
	const operations = [1000, -700, 300, -500, 10000];
	а так же начальный баланс в 100$
	Необходимо сделать функции расчёта:
	- 	Итогового балансо 
	- 	Наличия отрицательного баланса (если после очередной операции
		баланс < 0, то выдавать false)
	- 	Расчёта среднего расхода и среднего дохода
*/

const initialBalance = 100;
const operations = [1000, -700, 300, -500, 10000];
const proceededOperations = new Array();
const debits = new Array();
const credits = new Array();
let finalBalance = 0;

function CheckBalance(operations) {
  console.log(`Start Balance: ${initialBalance}`);
  finalBalance = initialBalance;
  ProceedOperations(operations);
  CountAverageOperationAmount(proceededOperations);
}

function willBeNegative(amount) {
  return finalBalance + amount < 0;
}

function ProceedOperations(operations) {
  for (let amount of operations) {
    if (willBeNegative(Number(amount))) {
      console.log(
        `Если совершить операцию ${amount}, то баланс станет отрицательным`
      );
      break;
    }

    AddAmount(amount);

    console.log(`New Balance: ${finalBalance}`);
  }
}

function AddAmount(amount) {
  console.log(`Operation: ${amount}`);

  proceededOperations.push(Number(amount));
  finalBalance += Number(amount);
}

function CountAverageOperationAmount(proceededOperations) {
	SortOperations(proceededOperations);
	const averageDebit = CountAverage(debits);
	const averageCredit = CountAverage(credits);
	console.log(`Average debit: ${averageDebit}`);
	console.log(`Average credit: ${averageCredit}`);
}

function SortOperations(operations) {
  for (let index in operations) {
    const amount = Number(operations[index]);
    if (amount > 0) {
      debits.push(amount);
    } 
	if(amount < 0) {
      credits.push(amount);
    }
  }
}

function CountAverage(operations) {
  let sum = 0;

  for (let amount of operations) {
    sum += Number(amount);
  }

  return sum / operations.length;
}

CheckBalance(operations);
