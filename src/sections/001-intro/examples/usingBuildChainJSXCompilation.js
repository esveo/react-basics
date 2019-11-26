// input
const app = (
  <div className="my-div">
    <header>Hello</header>
    <main>Hello</main>
    <footer>Hello</footer>
  </div>
);

// output
const app = React.createElement(
  'div',
  null,
  React.createElement('header', null, 'Hello'),
  React.createElement('main', null, 'Hello'),
  React.createElement('footer', null, 'Hello')
);
