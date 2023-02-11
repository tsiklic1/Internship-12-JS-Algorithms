const personsArray = [];

do{
  let firstName = prompt('Name');
  let lastName = prompt('Surname');
  let height = +prompt('Height in cm')

  if(isNaN(height)){
    alert('invalid input for height')
  }

  else{
    person = {
      firstName,
      lastName,
      height,
    }

    personsArray.push(person)
  }
} while(!confirm('Do you want to finish?'))

const avg = personsArray.reduce((p, c) => {
  return {height: p.height + c.height}
}, {height: 0,}
).height / personsArray.length;

let maxDeviation = 0;
let personWithMaxDeviation;

for (let person of personsArray){
  if(Math.abs(person.height - avg) > maxDeviation){
    maxDeviation = Math.abs(person.height - avg)
    personWithMaxDeviation = person;
  }
}

alert('Person with maximum deviation from average height is ' + personWithMaxDeviation.firstName + ' ' + personWithMaxDeviation.lastName
  + ' with height: ' + personWithMaxDeviation.height)