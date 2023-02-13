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
  new Fruit('grape', 'orange', false),
  new Fruit('strawberry', 'red', false),
  new Fruit('peach', 'orange', false)
]

const sortedFruits = fruits.sort((a, b) => {
  if (a.type < b.type){
    return -1;
  }
  return 1;
})

console.log(sortedFruits)
