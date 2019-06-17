const array = [1, 2, 3];
const object = { name: 'Steven', id: 'a2b3fe', color: 'green' };

// gather all remaining slots in a variable
const [first, ...remaining] = array;
// remaining: [2, 3]

// gather all remaining properties in a variable
const { id, ...rest } = object;
// rest: { name: "Steven", color: "green" }
