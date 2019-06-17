const User = props => <span>{props.user.name}</span>;

const UserContactButton = props => (
  <button>
    <User user={props.user} />
  </button>
);

const App = props => (
  <div>
    <UserContactButton user={props.user} />
  </div>
);

const app = <App user={{ name: 'Gwen' }} />;
