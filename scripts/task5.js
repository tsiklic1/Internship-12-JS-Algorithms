class Fruit{
  constructor(type, colorsArray, isForSale){
    this.type = type,
    this.colorsArray = colorsArray,
    this.isForSale = isForSale
  }
}

let fruits = [
  new Fruit('banana', ['yellow'], false),
  new Fruit('apple', ['green', 'yellow'], false),
  new Fruit('orange', ['orange'], false),
  new Fruit('kiwi', ['brown', 'green'], false),
  new Fruit('watermelon', ['green', 'red'], false),
  new Fruit('mango', ['yellow', 'orange'], false),
  new Fruit('peach', ['orange'], false),
  new Fruit('strawberry', ['red'], false)
];


const yellowFruits = fruits.filter(fruit => fruit.colorsArray.includes('yellow'));
console.log(yellowFruits)

alert("Fruits that have yellow color:" + JSON.stringify(yellowFruits, null, 4))