// Everything inside curly braces is beeing evaluated as JavaScript in the current scope
// Simple calculations
let app = <div>{4 + 4}</div>;

// Insert strings or numbers (or any other react node)
const name = 'User';
app = <div>Hello {name}</div>;

// Conditional rendering with ternary.
let showModal = true;
app = <div>{showModal ? <div>Model</div> : <div>No Modal</div>}</div>;

// Conditional rendering with logical expressions
showModal = false;
app = <div>{showModal && <div>Model</div>}</div>;
