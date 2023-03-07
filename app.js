/*
  приложение - склад. Можно искать, добавлять и получать вес продукта
*/

const warehouse = {
  goods: [{id: 0, weight: {kg: 0}, brand: 'nothing'}],
  findGoodById: function (id) {
    return this.goods.find(eg => eg.id == id);
  },
  addGood: function (good) {
    if(this.findGoodById(good.id)){
      return undefined;
    }

    this.goods.push(good);
  },
  getWeightKg: function (good) {
    return this.goods.reduce((acc, el) => 
      acc += el?.weight?.kg ? el.weight.kg : 0,
      0
    )
  }
};

const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
    kg: 2
  },
}

const paper = {
  id: 3,
  color: 'red'
}


console.log(warehouse.goods);
warehouse.addGood(car);
console.log(warehouse.findGoodById(car.id));
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.findGoodById(7));
console.log(warehouse.getWeightKg());
