const propTypes = {
  // every array satisfies this check
  users: array.isRequired,

  // only arrays containing objects (of any shape) satisfy this check
  userObjects: arrayOf(object).isRequired,

  // only arrays containing objects with that exact shape satisfy this check
  userShapes: arrayOf(
    shape({
      name: string,
      id: string,
      age: number
    })
  )
};
