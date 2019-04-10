import React, { Component } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Exercises } from './Exercises';
import { Home } from './Home';
import { Slides } from './Slides';

class App extends Component {
  render() {
    return (
      <Router
        initialEntries={
          process.env.NODE_ENV === 'production' ? undefined : ['/slides']
        }
      >
        <>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/slides" render={() => <Slides />} />
          <Route path="/exercises" render={() => <Exercises />} />
        </>
      </Router>
    );
  }
}

export default App;
