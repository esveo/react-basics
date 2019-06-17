hello();
// function declaration
function hello() {
  return 4 + 4;
}

// VM46183:1 Uncaught ReferenceError: Cannot access 'hello2' before initialization
hello2();
// function expression in a variable
const hello2 = function() {
  return 4 + 4;
};

// arrow function in a variable
const hello3 = () => {
  return 4 + 4;
};
// arrow functions can use implicit return
const hello3_5 = () => 4 + 4;
