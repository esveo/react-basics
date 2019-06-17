// the spread operator (...) allows you to insert all values from an object or an array

const array = [1, 2, 3];
const object = { name: 'Steven', id: 'a2b3fe', color: 'green' };

// Spread array into arguments
console.log(...array);
// same as
// console.log(1, 2, 3)
// NOT console.log([1, 2, 3])

// Spread array into other array
const newArray = [0, ...array, 4, 5];
// -->  [0, 1, 2, 3, 4, 5]

// Spread object into other object and overwrite by order
const newObject = { city: 'New York', ...object, id: '1' };
// --> { city: "New York", name: "Steven", id: "1", color: "green" }
