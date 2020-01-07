// FOR LOOP
// Declaration of a variable; condition; iteration;
for (let i = 0; i <= 10; i++) {
  // console.log('Number ' + i);

  // Break loop
  if (i === 6) {
    console.log("Number 6 is my favorite number");
    continue; // Replaces the number 6 in the iteration with console log message
  }
  console.log("Number " + i);

  if (i === 8) {
    console.log(`Stop the loop at ${i}`);
    continue;

  }
}

//WHILE LOOP - use when un clear on the # of itereations **
let i = 0;
while (i < 10) {
  console.log('Number ' + i);
  i++;
  if (i === 8) {
    console.log(`Number ${i} is the break `);
    break
  }
}


// DO WHILE - it will run at least once no matter what
let j = 10;
do {
  console.log('Number ' + j);
  j++;
  if (j === 15) {
    console.log(`The loop stops at ${j}`);
    break;
  }
}
while (j < 20);


// LOOPING THROUGH ARRAYS - ARRAYS HAVE SPECIFIC METHODS TO USE

const cars = ['BMW', 'Benz', 'Honda', 'Range Rover'];

for (let i = 0; i < cars.length; i++) {
  // console.log(i);
  // console.log(cars[i]);
  console.log(`${cars[i]} is my fav vehicle.`)
}

//USE FOR EACH LOOP TO LOOP THROUGH AN ARRAY - MUCH CLEANER
cars.forEach(function (car, index, array) {
  console.log(`My fav car is a ${index}: ${car}`);
  console.log(array);
})

// MAP - used to return a different array

const users = [
  { id: 1, name: 'Malcolm' },
  { id: 2, name: 'Martin' },
  { id: 3, name: 'Patrice' },
  { id: 4, name: 'Skittles' }
];

const ids = users.map(function (user) {
  return user.id
})

console.log(ids);

// FOR IN LOOP - USED TO LOOP THROUGH OBJECTS

const player = {
  firstName: 'John',
  lastName: 'Doe',
  age: 45
}

for (let x in player) {
  console.log(`${x} : ${player[x]}`);
}





