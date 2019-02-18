import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { allSolutions } from './sections/allSolutions';

export function Solutions() {
  return (
    <>
      <Route
        children={({ match }) => (
          <>
            <Route
              path={match.path}
              exact
              render={() => (
                <>
                  <h1>Solutions</h1>
                  <ul>
                    {allSolutions.map((solution, index) => (
                      <li key={index}>
                        <Link to={match.url + '/' + index}>
                          {index + 1}. {solution.name}
                        </Link>
                        - <span>{solution.fileSystemPath}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            />
            <Switch>
              {allSolutions.map((solution, index) => (
                <Route
                  key={index}
                  path={match.path + '/' + index}
                  render={() => <Solution solution={solution} />}
                />
              ))}
            </Switch>
          </>
        )}
      />
    </>
  );
}

function Solution({ solution }) {
  const containerParentRef = React.useRef();
  React.useEffect(() => {
    const containerParent = containerParentRef.current;
    const container = document.createElement('div');
    containerParent.innerHTML = '';
    containerParent.appendChild(container);

    setTimeout(() => {
      solution.init(container);
    }, 0);

    return () => {
      ReactDOM.unmountComponentAtNode(container);
    };
  }, [solution]);

  return <div ref={containerParentRef} />;
}
