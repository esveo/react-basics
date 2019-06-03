import styled from '@emotion/styled/macro';
import React from 'react';
import { Link } from './__helpers/slides/Link';
import { Logo } from './__helpers/slides/Logo';
import { Planets } from './__helpers/slides/Planets';
import { ReactLogo } from './__helpers/slides/ReactLogo';

export function Home() {
  return (
    <Wrapper>
      <Planets />
      <Foreground>
        <ReactLogo style={{ height: 100 }} />
        <h1>React Basics</h1>
        <p>
          by <Logo />
        </p>
        <Content>Training material</Content>
        <Links>
          <Link data-test-id="slides-link" to="/slides">
            Slides
          </Link>
          <Link to="/exercises">Exercises</Link>
        </Links>
      </Foreground>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgb(35, 35, 35);
  overflow: hidden;
  padding: 0;
  margin: 0;

  h1 {
    font-size: 10em;
    margin: 0;
  }

  p {
    font-size: 2.8em;
    margin: 0;
  }

  > * {
    position: relative;
  }
`;

const Foreground = styled.div`
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Content = styled.p`
  && {
    font-size: 1.8em;
    margin-top: 1em;
  }
`;

const Links = styled.div`
  display: flex;

  ${Link} {
    display: inline-block;
    padding: 1em;
    font-size: 4em;
    flex: 1 1 0;
    width: 300px;
    text-align: center;
  }
`;
