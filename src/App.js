import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Slides } from './Slides';
import { Home } from './Home';
import { Exercises } from './Exercises';

class App extends Component {
  render() {
    return (
      <Router>
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
