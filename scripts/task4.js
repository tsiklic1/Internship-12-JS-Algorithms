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

// ovo bez filtera - samo petljon kroz sva voća - ispisat staro - prominit - ispisat novo