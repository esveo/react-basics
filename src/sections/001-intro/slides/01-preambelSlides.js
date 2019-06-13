import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { AngularLogo } from '../../../__helpers/slides/AngularLogo';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { ReactLogo } from '../../../__helpers/slides/ReactLogo';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { VueLogo } from '../../../__helpers/slides/VueLogo';
import { initialSetupExerciseSlides } from '../exercises/01-initialSetup/slides';
import { ReactComponent as ModulesSVG } from './modules.svg';

export const preambelSlides = [
  <Slide>
    <Header text="About us" />
    <Columns>
      <Column>
        <ColumnHead>
          Digital
          <br />
          Solutions
        </ColumnHead>
        <List>
          <ListItem>Planning, controlling, reporting</ListItem>
          <ListItem>Information management</ListItem>
          <ListItem>Processes</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>
          Information
          <br />
          Security
        </ColumnHead>
        <List>
          <ListItem>Consulting</ListItem>
          <ListItem>Trainings</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>
          Software
          <br />
          Technology
        </ColumnHead>
        <List>
          <ListItem>Project Onboarding</ListItem>
          <ListItem>Architecture Consulting</ListItem>
          <ListItem>Software Development Trainings</ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Who are you?" />
    <List>
      <ListItem>What's your name?</ListItem>
      <ListItem>What are your experiences?</ListItem>
      <ListItem>Why are you here?</ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="What do we want to achieve?" />
    <Text>
      You should be able to <b>build your own React projects</b> from scratch.
    </Text>
    <Text>
      You should have a starting point for{' '}
      <b>selecting technologies/libraries</b> for your next frontend project.
    </Text>
    <Footer />
  </Slide>,

  getTOCSlide(),

  <Slide>
    <Header text={`State of JS ${dash} history`} />
    <Columns style={{ fontSize: '0.9em' }}>
      <Column>
        <ColumnHead>Static documents</ColumnHead>
        <List>
          <ListItem>(Almost) no interactivity</ListItem>
          <ListItem>Click to reload next document</ListItem>
          <ListItem>
            Development workflow:
            <List>
              <ListItem>Create HTML file</ListItem>
              <ListItem>Create CSS file</ListItem>
              <ListItem>Open in Browser</ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Small interactions</ColumnHead>
        <List>
          <ListItem>Client-side interaction like menus or modals</ListItem>
          <ListItem>
            First libraries to overcome browser inconsistencies (jQuery,
            MooTools)
          </ListItem>
          <ListItem>
            Development workflow:
            <List>
              <ListItem>Create HTML file</ListItem>
              <ListItem>Link library JS files</ListItem>
              <ListItem>Create CSS file</ListItem>
              <ListItem>Create JS file</ListItem>
              <ListItem>Open in Browser</ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Rich clients</ColumnHead>
        <List>
          <ListItem>Client-side business logic</ListItem>
          <ListItem>App-like look and feel</ListItem>
          <ListItem>
            Development workflow:
            <List>
              <ListItem>Setup build chain</ListItem>
              <ListItem>Write modules for JS, CSS, HTML</ListItem>
              <ListItem>Import modules from entry point</ListItem>
              <ListItem>Depend on open source modules</ListItem>
              <ListItem>Compile modern code for older browsers</ListItem>
              <ListItem>Open in Browser</ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Frameworks`} />
    <Columns>
      <Column>
        <ColumnHead>New requirements</ColumnHead>
        <List>
          <ListItem>Larger applications</ListItem>
          <ListItem>Larger code bases</ListItem>
          <ListItem>More devices (desktop, tablet, mobile)</ListItem>
          <ListItem>More complex UIs</ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <ColumnHead>Frameworks to reduce complexity</ColumnHead>
        <List>
          <ListItem>
            Basic idea: Building <b>small, reusable components</b>
          </ListItem>
        </List>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AngularLogo style={{ height: '6em' }} />
          <ReactLogo style={{ height: '6em' }} />
          <VueLogo style={{ height: '5em' }} />
        </div>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Modules`} />
    <Columns align="center">
      <Column p={0}>
        <List>
          <ListItem>Everything is a module</ListItem>
          <ListItem>JS as central coordination language</ListItem>
          <ListItem>Often only one entry point per page</ListItem>
        </List>
      </Column>
      <Column weight={2} p={0}>
        <ModulesSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`State of JS ${dash} Build Chain`} />
    <Columns>
      <Column>
        <ColumnHead>Bundler</ColumnHead>
        <List>
          <ListItem>
            Downloading all modules separately is <b>too slow</b>
          </ListItem>
          <ListItem>
            The bundler <b>combines the modules</b> into a couple of files
          </ListItem>
          <ListItem>
            The bundler has to understand <b>different file types</b> (js, css,
            png, ...)
          </ListItem>
          <ListItem>Popular bundlers: webpack, parcel and rollup.</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Compiler</ColumnHead>
        <List>
          <ListItem>
            Since 2015 ECMAScript (name of the spec) is evolving yearly
          </ListItem>
          <ListItem>
            Many modern <b>features</b> are <b>not yet available in browsers</b>
          </ListItem>
          <ListItem>
            The compiler takes the modern JS code and{' '}
            <b>transpiles it to an older version</b> so that more browsers can
            execute your code.
          </ListItem>
          <ListItem>Popular compilers: Babel</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Optimizer</ColumnHead>
        <List>
          <ListItem>
            Source code contains overhead: Comments, descriptive variable names,
            whitespace, dead code
          </ListItem>
          <ListItem>
            The optimizer or minifier <b>removes this overhead</b> when building
            for the production environment.
          </ListItem>
          <ListItem>Popular minifiers: terser</ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  ...initialSetupExerciseSlides
];
