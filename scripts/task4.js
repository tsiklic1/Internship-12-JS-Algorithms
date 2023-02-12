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

const fruitsCopy = JSON.parse(JSON.stringify(fruits));

for (let i=0; i<fruits.length; i++){

  if(fruits[i].colorsArray.includes('yellow')){
    console.log('Old fruit')
    console.log(fruitsCopy[i])
    fruits[i].colorsArray.splice(fruits[i].colorsArray.indexOf('yellow'), 1, 'red')
    console.log('New fruit')
    console.log(fruits[i])
  }
}