/*
  создать blueprint пользователя, используя образ которого можно увеличивать
  баланс его счета на число и увеличивать число операций на 1.
*/

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum,
    this.operations++
  }
}

function newUser(){
  const newUser = {
    balance: 0,
    operations: 0,
    increase(sum) {
      this.balance += sum,
      this.operations++;
    },
  };
  return function(){
    return newUser;
  }
}

const user1 = newUser();
user1().increase(100);
user1().increase(-50);
user1().increase(500);

console.log(user1().balance);
console.log(user1().operations);