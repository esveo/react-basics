import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      {[1, 2, 3].map(projectId => (
        <li key={projectId}>
          <Link to={`/projects/${projectId}`}>Projects</Link>
        </li>
      ))}
    </ul>
  );
}
