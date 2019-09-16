import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { App } from './App';
import { GlobalSatelliteProvider } from './Satellites';

/**
 * This is only needed to embed the exercises into the training-app.
 * Simply put the body of this function into your index.js file and replace container with
 * document.getElementById('root')
 */
export const init = container => {
  ReactDOM.render(
    <Router>
      <GlobalSatelliteProvider>
        <Route
          path="/:satelliteId"
          children={routerProps => <App {...routerProps} />}
        />
      </GlobalSatelliteProvider>
    </Router>,
    container
  );
};
