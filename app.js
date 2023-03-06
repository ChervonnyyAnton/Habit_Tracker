/*
  Релизовать методы увеличения и уменьшения баланса,
  при котором каждая операция сохраняется в массив
  operations в виде { reason: 'Оплата налогов', sum: -100 }. 
  Возвращается true, если успешно и false, если не хватает баланса
  Так же реализовать метод вывода числа операций по кошельку 
*/

const wallet = {
  balance: 0,
  operations: [{reason: 'initial value', value: 0}],
  addValue: function (reason, value){
    if(Number(value) + this.balance < 0){
      return 'Operation declined - not enough debit';
    }
    this.operations.push({reason: reason, value: Number(value)});
    this.balance += value;
    return `after adding ${value} for ${reason} the balance is ${this.balance}`;
  },
  getOperations: function(){
    return this.operations;
  },
  getBalance: function(){
    return this.balance;
  }
}

console.log(wallet.getBalance());
console.log(wallet.getOperations());
console.log(wallet.addValue('positive context', 100));
console.log(wallet.addValue("next positive context", 1100));
console.log(wallet.addValue("positive negative context", -1000));
console.log(wallet.addValue("negative context", -1100));
console.log(wallet.getBalance());
console.log(wallet.getOperations());