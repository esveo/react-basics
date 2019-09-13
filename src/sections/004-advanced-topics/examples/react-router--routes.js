import { Route } from 'react-router-dom';

export function MainAppComponent() {
  return (
    <div>
      <MainNavigation />
      <div className="body">
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route
          exact
          path="/projects/:id"
          render={routeProps => <Project id={routeProps.match.params.id} />}
        />
      </div>
    </div>
  );
}
