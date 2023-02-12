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

const sameNameAndColorFruits = fruits.filter(fruit => fruit.type === fruit.color)
console.log(sameNameAndColorFruits)

alert("Fruits with the same name and color" + JSON.stringify(sameNameAndColorFruits, null, 4))