/*
  дана функци сброса пароля. Нужно создать пользователя,
  которому можно передать функцию.
*/

function removePassword(reset){
  if(reset){
    this.password = undefined;
  }
  else{
    this.password = 'admin'
  }
};

const user = {
  username: 'Ivan',
  password: '12345'
};

console.log(user.password);

const resetUserPassword = removePassword.bind(user, true);

resetUserPassword();

console.log(user.password);