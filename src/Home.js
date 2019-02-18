import styled from '@emotion/styled/macro';
import React from 'react';
import { Link } from './__helpers/slides/Link';
import { Logo } from './__helpers/slides/Logo';
import { ReactLogo } from './__helpers/slides/ReactLogo';

export function Home() {
  return (
    <Wrapper>
      <ReactLogo style={{ height: 100 }} />
      <h1>React Basics</h1>
      <p>
        by <Logo />
      </p>
      <Content>Training material</Content>
      <Links>
        <Link to="/slides">Slides</Link>
        <Link to="/solutions">Solutions</Link>
      </Links>
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
