const renderGreeting = (name, isExited) => (
  <h1>
    Hello {name}
    {isExited ? '!!!!!!!' : null}
  </h1>
);

let app = (
  <div>
    {renderGreeting('Bruce', false)}
    {renderGreeting('Wanda', true)}
  </div>
);
