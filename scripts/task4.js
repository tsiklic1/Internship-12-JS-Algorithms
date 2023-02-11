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
];

console.log(fruits)

const fruitsCopy = [...fruits]

const yellowFruits = fruits.filter(fruit => fruit.colorsArray.includes('yellow'));

console.log(yellowFruits)

for (let yellowFruit of yellowFruits){
  yellowFruit.colorsArray.splice(yellowFruit.colorsArray.indexOf(color => color === 'yellow'), 1, 'red')
  // yellowFruit.colorsArray[yellowFruit.colorsArray.indexOf(color => color === 'yellow')] = 'red'
}

console.log(fruits)