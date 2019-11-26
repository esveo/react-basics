const renderGreeting = (name, isExcited) => (
  <h1>
    Hello {name}
    {isExcited ? '!!!!!!!' : null}
  </h1>
);

let app = (
  <div>
    {renderGreeting('Bruce', false)}
    {renderGreeting('Wanda', true)}
  </div>
);
