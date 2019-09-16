class App extends React.Component {
  state = { todos: [], filter: '' };

  componentDidMount() {
    loadTodos(this.props.userId).then(todos => this.setState({ todos }));
  }

  componentDidUpdate(previousProps) {
    if (previousProps.userId !== this.props.userId) {
      loadTodos(this.props.userId).then(todos => this.setState({ todos }));
    }
  }

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div>
        <input value={filter} onChange={this.handleChange} />
      </div>
    );
  }
}
