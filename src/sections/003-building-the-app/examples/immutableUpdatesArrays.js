const numbers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// remove by value with filer
const no3 = numbers.filter(n => n.id !== 3);

// remove by index with filter
const noFirst = numbers.filter((n, index) => index !== 0);

// Change with map
const changed = numbers.map(n => (n.id === 2 ? { id: 5 } : n));

// Add with spread operator
const added = [...numbers, { id: 4 }];
