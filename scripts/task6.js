class Fruit{
  constructor(type, color, isForSale){
    this.type = type,
    this.color = color,
    this.isForSale = isForSale
  }
}

let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', true),
  new Fruit('orange', 'orange', true),
  new Fruit('grape', 'orange', false),
  new Fruit('strawberry', 'red', false),
  new Fruit('peach', 'orange', false)
]

alert(JSON.stringify(fruits, null, 4));

if(fruits.some(fruit => !fruit.isForSale)){
  const listOfNotForSaleIndexes = []
  for (let i=0; i<fruits.length; i++){
    if(!fruits[i].isForSale){
      listOfNotForSaleIndexes.push(i)
    }
  }

  alert('Indices: ' + listOfNotForSaleIndexes)

  const forSaleFruits = fruits.filter(fruit =>fruit.isForSale)

  alert('Fruits available for sale: ' + JSON.stringify(forSaleFruits, null, 4));

}

else{
  alert('all fruits are for sale')
}
