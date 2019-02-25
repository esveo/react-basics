import styled from '@emotion/styled/macro';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { allSolutions } from './sections/allSolutions';
import { dash } from './__helpers/dash';
import { Link, NavLink } from './__helpers/slides/Link';
import { pathToSolution } from './__helpers/solutions/pathToSolution';

export function Exercises() {
  return (
    <>
      <Route
        children={({ match }) => (
          <>
            <Route
              path={match.path}
              exact
              render={() => (
                <Header
                  breadcrumbs={[{ path: '/exercises', name: 'Exercises' }]}
                >
                  <ExercisesContainer>
                    <h1>Exercises</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Exercise</th>
                          <th>Solution Result</th>
                          <th>Solution Source Code</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allSolutions.map((solution, index) => (
                          <tr key={index}>
                            <td>
                              <Link
                                to="/slides"
                                onClick={e => {
                                  window.location.replace(
                                    solution.exercisePath
                                  );
                                }}
                              >
                                {index + 1}. {solution.name}
                              </Link>
                            </td>
                            <td>
                              <Link to={pathToSolution(solution.thunk)}>
                                Result
                              </Link>
                            </td>
                            <td>{solution.fileSystemPath}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <ul />
                  </ExercisesContainer>
                </Header>
              )}
            />
            <Switch>
              {allSolutions.map((solution, index) => (
                <Route
                  key={index}
                  path={match.path + '/' + solution.thunk}
                  render={() => (
                    <Header
                      breadcrumbs={[
                        { path: '/exercises', name: 'Exercises' },
                        {
                          path: match.path + '/' + solution.thunk,
                          name:
                            solution.name +
                            ` ${dash} ` +
                            solution.fileSystemPath
                        }
                      ]}
                    >
                      <Solution solution={solution} />
                    </Header>
                  )}
                />
              ))}
            </Switch>
          </>
        )}
      />
    </>
  );
}

const ExercisesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;

  thead {
    font-weight: bold;
  }

  td,
  th {
    padding: 5px 20px;
    text-align: left;
  }
`;

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

function Header({ children, breadcrumbs = [] }) {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        {breadcrumbs.map(({ path, name }) => (
          <React.Fragment key={name}>
            <Divider>
              <FontAwesomeIcon icon={faAngleRight} />
            </Divider>
            <NavLink to={path} activeClassName="active" exact>
              {name}
            </NavLink>
          </React.Fragment>
        ))}
      </HeaderNav>
      <HeaderChildrenContainer>{children}</HeaderChildrenContainer>
    </HeaderContainer>
  );
}

const Divider = styled.span`
  color: white;
`;

const HeaderContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

const HeaderNav = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2em;
  height: 4em;
  background: rgb(35, 35, 35);

  & > * {
    margin: 10px;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  ${NavLink}.active {
    text-decoration: none;
  }
`;

const HeaderChildrenContainer = styled.div`
  height: calc(100% - 4em);
  overflow: auto;
`;
