const person = {
  name: 'fred',
  greet() {
    // Solution 2 <function>.bind
    setTimeout(
      function() {
        console.log(self.name);
      }.bind(this),
      5000
    );

    // Solution 3 arrow function
    setTimeout(() => {
      console.log(this.name);
    }, 5000);
  }
};
