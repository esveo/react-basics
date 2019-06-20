let user = {
  a: 1,
  b: 2,
  c: 3
};

const changed = {
  // always copy references to old values
  ...user,

  // overwrite changed
  b: 4
};

const added = {
  ...user,
  d: 4
};

// To remove a property, use desctructuring with spread operator
const { a, ...removed } = user;
