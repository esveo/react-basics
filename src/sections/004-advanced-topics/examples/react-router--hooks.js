import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export function App() {
  const currentTopLevelMatch = useRouteMatch();

  // will be null when route is not active.
  const specificPathMatch = useRouteMatch('/projects');

  const matchWithParams = useRouteMatch('/projects/:projectId');

  const projectId = matchWithParams && matchWithParams.params.projectId;

  const history = useHistory();

  return <button onClick={() => history.push('/')}>Home</button>;
}
