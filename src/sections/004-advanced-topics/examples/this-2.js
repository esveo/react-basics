const person = {
  name: 'fred',
  greet() {
    // Set timeout cannot call the function on the context of person
    // Will always log undefined
    setTimeout(function() {
      console.log(this.name);
    }, 5000);

    // Solution 1 capturing this
    const self = this;
    setTimeout(function() {
      console.log(self.name);
    }, 5000);
  }
};
