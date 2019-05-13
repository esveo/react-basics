import styled from '@emotion/styled/macro';
import { faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { allSolutions } from './sections/allSolutions';
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
                    <ExercisesTable>
                      <ExercisesList>
                        {allSolutions.map((solution, index) => (
                          <Exercise key={index}>
                            <ExercisesName>
                              <Link
                                to="/slides"
                                onClick={e => {
                                  window.location.replace(
                                    solution.exercisePath
                                  );
                                }}
                              >
                                <ExerciseNumber>{index + 1}.</ExerciseNumber>
                                {solution.name}
                              </Link>
                            </ExercisesName>
                            <ExercisesResult>
                              <Link to={pathToSolution(solution.thunk)}>
                                Result
                              </Link>
                            </ExercisesResult>
                          </Exercise>
                        ))}
                      </ExercisesList>
                    </ExercisesTable>
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
                          name: solution.name
                        }
                      ]}
                      solution={solution}
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
  overflow: hidden;

  h1 {
    flex: 0 0 auto;
  }
`;

const ExercisesTable = styled.div`
  height: 100%;
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const ExercisesList = styled.ul`
  flex: 1 1 auto;
  overflow: auto;
  height: 100%;
  padding: 0;
`;
const ExercisesName = styled.div`
  width: 20em;
`;
const ExercisesResult = styled.div`
  width: 10em;
`;
const Exercise = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin-bottom: 0.8em;
`;

const ExerciseNumber = styled.span`
  display: inline-block;
  width: 2em;
`;

function Solution({ solution }) {
  const containerParentRef = React.useRef();
  React.useEffect(() => {
    const containerParent = containerParentRef.current;
    const container = document.createElement('div');
    container.style.height = '100%';
    containerParent.innerHTML = '';
    containerParent.appendChild(container);

    setTimeout(() => {
      solution.init(container);
    }, 0);

    return () => {
      ReactDOM.unmountComponentAtNode(container);
    };
  }, [solution]);

  return <div style={{ height: '100%' }} ref={containerParentRef} />;
}

function Header({ children, breadcrumbs = [], solution }) {
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
        {solution && (
          <Link
            to="/slides"
            onClick={e => {
              window.location.replace(solution.exercisePath);
            }}
          >
            (Exercise Slides)
          </Link>
        )}
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
  height: 60px;
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
  height: calc(100% - 60px);
  overflow: auto;
`;
