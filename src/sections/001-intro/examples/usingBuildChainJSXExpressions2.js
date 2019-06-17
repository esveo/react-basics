// Loops always have an underlying source that can be transformed:

const users = [{ name: 'Tony' }, { name: 'Peter' }, { name: 'Steve' }];
let app = (
  <div>
    {users.map(user => (
      <h1 key={user.name}>{user.name}</h1>
    ))}
  </div>
);

// When there really is no source, we can simply build one
app = (
  <div>
    {[1, 2, 3].map(n => (
      <h1 key={n}>{n}</h1>
    ))}
  </div>
);
