// Destructuring is a concise way to extract variables form an object or an array.

const array = [1, 2, 3];
const object = { name: 'Steven', id: 'a2b3fe', color: 'green' };

// For arrays, you can choose arbitrary names:
const [first, second] = array;
// Same as
// const first = array[0];
// const second = array[1];

// For objects, the names must match:
const { name, id } = object;
// Same as
// const name = object.name
// const id = object.id
