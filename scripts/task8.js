const naturalNumbers = Array.from(Array(100).fill(), (x, i) => i+1);

// 1)
// let sum = 0;
// for (let number of naturalNumbers){
//   sum += number;
// }

// 2)
// for (let i = 1; i<101; i++){
//   sum += i;
// }

// 3)
const sum = naturalNumbers.reduce((p, c) => {
  return p + c
}, 0)

console.log(sum)