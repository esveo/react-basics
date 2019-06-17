var x = 5;
x = 6;
while (x > 2) {
  x--;
  var y = x;
}
// y is reachable outside of the while block

while (x < 6) {
  x++;
  let z = x;
}
// z is not reachable outside of the while block

const pi = 4;
pi = 3.141592654;
// Uncaught TypeError: Assignment to constant variable.
