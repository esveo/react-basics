import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Slides } from './Slides';
import { Solutions } from './Solutions';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/slides" render={() => <Slides />} />
          <Route path="/solutions" render={() => <Solutions />} />
        </>
      </Router>
    );
  }
}

export default App;
