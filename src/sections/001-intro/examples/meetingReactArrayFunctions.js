const myArray = [1, 2, 3, 4, 5];

const squared = myArray.map(item => item * item);

const even = squared.filter(item => item % 2 === 0);

const descending = even.sort((itemA, itemB) => {
  if (itemA > itemB) return -1;
  if (itemB > itemA) return -1;
  return 0;
});

// Since each method returns an array, these methods can be chained.
const alsoDescending = [1, 2, 3, 4, 5]
  .map(item => item * item)
  .filter(item => item % 2 === 0)
  .sort((itemA, itemB) => itemB - itemA);
