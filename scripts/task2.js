const numberOfPersonsToAdd = +prompt('Number of persons to add: ')
const personsArray = [];

if(isNaN(numberOfPersonsToAdd)){
  alert('Wrong input (must be number)')

}

else{
  for (let i = 0; i<numberOfPersonsToAdd; i++){
    let firstName = prompt('First name');
    let lastName = prompt('Last name');
    let eyeColor = prompt('eye color');
    let hairColor = prompt('hair color');
    let height = +prompt('height')

    if(isNaN(height)){
      alert('invalid input for height (must be number)')
    }
    else{
      person = {
        firstName,
        lastName,
        eyeColor,
        hairColor,
        height,
      }

      personsArray.push(person);
    }
    
  }
  const sortedPersonsArray = personsArray.sort((a, b)=>{
    return a.height - b.height
  })

  const medianIndex = Math.trunc(sortedPersonsArray.length/2);

  const personsHigherThanMedian = sortedPersonsArray.slice(medianIndex);

  let personNamesOutputString = '';

  for (let person of personsHigherThanMedian){
    if(person.eyeColor === person.hairColor){
      personNamesOutputString += ' ' + person.firstName
    }
  }

  alert(personNamesOutputString)

}

