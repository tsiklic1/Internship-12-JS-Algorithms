class Fruit{
  constructor(type, color, isForSale){
    this.type = type,
    this.color = color,
    this.isForSale = isForSale;
  }
}

let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', false),
]

const sortedFruits = fruits.sort((a, b) => {
  if (a.type < b.type){
    return -1;
  }
  return 1;
})

console.log(fruits)
alert(JSON.stringify(sortedFruits, null, 4))