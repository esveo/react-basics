const renderUser = user => <span>{user.name}</span>;
const renderUserContactButton = user => <button>{renderUser(user)}</button>;
const renderApp = user => <div>{renderUserContactButton(user)}</div>;

const app = renderApp({ name: 'Gwen' });
