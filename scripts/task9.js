const inputString = prompt('Input data separated by <space>')
const splitArray = inputString.split(' ')

const csvString = splitArray.reduce((p,c) => {
  return p + ',' + c
},'')

alert(csvString.slice(1))