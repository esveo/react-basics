import React, { Component, useEffect } from 'react';
import { MemoryRouter as Router, Route, withRouter } from 'react-router-dom';
import './App.css';
import { Exercises } from './Exercises';
import { Home } from './Home';
import { Slides } from './Slides';

class App extends Component {
  render() {
    return (
      <Router initialEntries={getInitialEntries()}>
        <>
          <StoreLastPath />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/slides" render={() => <Slides />} />
          <Route path="/exercises" render={() => <Exercises />} />
        </>
      </Router>
    );
  }
}

export default App;

const localStorageRouteKey = 'react-basic-training--location';
function setLocation(location) {
  try {
    localStorage.setItem(localStorageRouteKey, location);
  } catch (err) {}
}
function getInitialEntries() {
  try {
    const last = localStorage.getItem(localStorageRouteKey);
    return last ? [last] : undefined;
  } catch (err) {
    return undefined;
  }
}
const StoreLastPath = withRouter(function StoreLastPath(props) {
  useEffect(() => {
    setLocation(props.location.pathname);
  }, [props.location.pathname]);
  return null;
});
