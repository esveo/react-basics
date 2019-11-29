import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { AngularLogo } from '../../../__helpers/slides/AngularLogo';
import { Code } from '../../../__helpers/slides/Code';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { ReactLogo } from '../../../__helpers/slides/ReactLogo';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { VueLogo } from '../../../__helpers/slides/VueLogo';
import { initialSetupExerciseSlides } from '../exercises/01-initialSetup/slides';
import { ReactComponent as CSSSvg } from './css3.svg';
import { ReactComponent as HTMLSvg } from './html5.svg';
import { ReactComponent as JSSvg } from './js.svg';
import { ReactComponent as ModulesSVG } from './modules.svg';

export const preambelSlides = [
  <Slide>
    <Header text="About us" />
    <Columns>
      <Column>
        <ColumnHead>Digital Solutions</ColumnHead>
        <List>
          <ListItem>Planning, controlling, reporting</ListItem>
          <ListItem>Information management</ListItem>
          <ListItem>Processes</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Software Technology</ColumnHead>
        <List>
          <ListItem>Technology Workshops</ListItem>
          <ListItem>Software Development Trainings</ListItem>
          <ListItem>Architecture Consulting</ListItem>
          <ListItem>Project Kick-Offs</ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Who are you?" />
    <List>
      <ListItem>What's your name?</ListItem>
      <ListItem>
        What are your experiences regarding
        <List>
          <ListItem>Software development</ListItem>
          <ListItem>Web development</ListItem>
          <ListItem>React</ListItem>
        </List>
      </ListItem>
      <ListItem>
        What expectations do you have regarding this training?
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="What do we want to achieve?" />
    <Footer />
  </Slide>,

  <Slide key="goal">
    <Header text="What do we want to achieve?" />
    <Text size={1.3}>
      You should be able to <b>build your own React projects</b> from scratch.
    </Text>
    <Text size={1.3}>
      You should have a starting point for{' '}
      <b>selecting technologies/libraries</b> for your next frontend project.
    </Text>
    <Footer />
  </Slide>,

  <Slide key="prerequisites">
    <Header text="What should you already know?" />
    <Columns>
      <Column weight={1}>
        <ColumnHead>
          <HTMLSvg style={{ height: 110, flexShrink: 0 }} />
        </ColumnHead>
        <List>
          <ListItem>General structure of a HTML document</ListItem>
          <ListItem>Integration of styles and scripts</ListItem>
          <ListItem>
            Basic tags like <Code>div</Code>, <Code>span</Code>, <Code>a</Code>,{' '}
            <Code>p</Code> etc.{' '}
          </ListItem>
          <ListItem>
            <ALink
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
            >
              Help
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column weight={1}>
        <ColumnHead>
          <CSSSvg style={{ height: 110, flexShrink: 0 }} />
        </ColumnHead>
        <List>
          <ListItem>Selectors</ListItem>
          <ListItem>Properties</ListItem>
          <ListItem>
            <ALink
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
            >
              Help
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column weight={1}>
        <ColumnHead>
          <JSSvg style={{ height: 110, flexShrink: 0 }} />
        </ColumnHead>
        <List>
          <ListItem>Variables</ListItem>
          <ListItem>Data types</ListItem>
          <ListItem>
            Control structures (like <Code>if</Code>)
          </ListItem>
          <ListItem>Functions</ListItem>
          <ListItem>
            <ALink
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
            >
              Help
            </ALink>
          </ListItem>
        </List>
      </Column>
    </Columns>
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

  <Slide key="preparations">
    <Header text="What do you need to participate?" />
    <List>
      <ListItem>
        Modern Browser: <b>Chrome</b> or <b>Firefox</b>
      </ListItem>
      <ListItem>
        <b>Node.js</b> {dash} validate with <Code>node -v</Code> (
        <ALink href="https://nodejs.org/en/" target="_blank">
          Download
        </ALink>
        )
      </ListItem>
      <ListItem>
        <b>npm</b> {dash} validate with <Code>npm -v</Code> (included with
        Node.js)
      </ListItem>
      <ListItem>
        Editor/IDE: <b>Visual Studio Code</b> (recommended), WebStorm, Atom,
        etc. (
        <ALink href="https://code.visualstudio.com/download" target="_blank">
          Download
        </ALink>
        )
      </ListItem>
      <ListItem>
        Ability/Permissions for global npm modules {dash} validate with{' '}
        <Code>npm i -g create-react-app</Code>
      </ListItem>
      <ListItem>Optional: Version Control like git, svn, mercurial</ListItem>
    </List>
    <Footer />
  </Slide>,

  ...initialSetupExerciseSlides
];
