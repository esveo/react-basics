// scoped to this module. No global variables by default.
const x = 5;

// explicitly denote exports
export const y = 6;
export function func1() {
  return 'func1';
}

// You can also export multiple variables at once:
const a = 1;
const b = 2;
function func2() {
  return a + b;
}
export { a, b, test };

// And each module can have a default export
export default func2;
