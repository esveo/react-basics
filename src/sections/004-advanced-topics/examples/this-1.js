// <this> is determined when calling the function
const person = {
  name: 'fred',
  // Same as greet() { ... }

  greet: function() {
    // This is not always <person>
    console.log(`Hello ${this.name}`);
  }
};

// <this> is set to person, because greet is called
// in the <context> of person
person.greet(); // Hello fred

// Function definition extracted
const greet = person.greet;

// Function called without context
greet(); // Hello undefined
