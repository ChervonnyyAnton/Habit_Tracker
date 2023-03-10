/*
  дополнить объект методами для
  получения названия компании,
  ceo и сотрудника
*/

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getName: function(){
        return this.name;
      }
    }
  ],
  ceo: {
    name: 'Вася',
    getName: function(){
      return this.name;
    }
  },

  getName: function(){
    return this.name;
  },
  getEmployees: function(){
    return this.employees.map(el => el.getName());
  }
}

console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.getEmployees());