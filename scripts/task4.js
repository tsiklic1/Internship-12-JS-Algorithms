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


for (let fruit of fruits){
  if(fruit.colorsArray.includes('yellow')){
    console.log('Old fruit')
    console.log(fruit)
    fruit.colorsArray.splice(fruit.colorsArray.indexOf('yellow'), 1, 'red')
    console.log('New fruit')
    console.log(fruit)
  }
}