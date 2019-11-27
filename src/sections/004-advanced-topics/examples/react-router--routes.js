import { Route, Switch } from 'react-router-dom';
export function MainAppComponent() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/projects/:projectId">
          <Project />
        </Route>
      </Switch>
    </div>
  );
}
