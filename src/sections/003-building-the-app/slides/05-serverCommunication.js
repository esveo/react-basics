import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { serverCommunicationExerciseSlides } from '../exercises/05-serverCommunication/slides';
import { ReactComponent as TierArchitectureSVG } from './n-tier.svg';

export const serverCommunicationSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="3 Tier architecture" />
    <Columns align="center">
      <Column weight={1}>
        <List>
          <ListItem>
            Clearly defined interfaces (<b>APIs</b>) between layers
          </ListItem>
          <ListItem>
            Communication between layers is orders of magnitude <b>slower</b>{' '}
            than internal communication in a layer
          </ListItem>
        </List>
      </Column>
      <Column weight={2}>
        <TierArchitectureSVG />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Singlethreaded JavaScript" />
    <List>
      <ListItem>
        Whenever a regular function starts, it will run from <b>start</b> to{' '}
        <b>finish</b>.
      </ListItem>
      <ListItem>
        It is <b>not</b> directly <b>possible</b> to run{' '}
        <b>two functions at the same time</b>.
      </ListItem>
      <ListItem>
        Every function blocks the main thread:
        <List>
          <ListItem>
            <b>No JS based animations</b>
          </ListItem>
          <ListItem>
            <b>No hover effects</b>
          </ListItem>
          <ListItem>
            <b>No typing</b>
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 1: Callbacks" />
    <CodeBlock lang="jsx" source={raw('../examples/callbacks.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 2: Promises" />
    <CodeBlock lang="jsx" source={raw('../examples/promises.js')} />
    <br />
    <Text>
      A promise is something with the <Code>.then</Code> and <Code>.catch</Code>{' '}
      methods
    </Text>
    <Text>Encapsulates a value that will be there in the future</Text>
    <Text>Usable in all modern browsers</Text>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Solution 2.5: Async/Await" />
    <CodeBlock lang="jsx" source={raw('../examples/asyncawait.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="HTTP" />
    <Text>
      Browser sends text based request to the server and retrieves responses
    </Text>
    <CodeBlock source={raw('../examples/http.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Example: Fetch" />
    <CodeBlock source={raw('../examples/fetch.js')} />
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Exercise preparation: SatelliteAPI" />
    <Text left>
      Node backend that provides a JSON HTTP-API to manage satellites. Start
      with <Code>node server.js</Code>
    </Text>
    <List>
      <ListItem>
        Base-URL: <Code>http://localhost:3002/</Code>
      </ListItem>
      <ListItem>
        <Code>GET /satellites</Code>: Returns list of satellites
      </ListItem>
      <ListItem>
        <Code>POST /satellites</Code>: Add a new satellite. Returns the created
        satellite.
      </ListItem>
      <ListItem>
        <Code>PUT /satellites/:id </Code>: Update the satellite with the id
        (replace :id in the URI with the desired id). Returns the updated
        satellite.
      </ListItem>
      <ListItem>
        <Code>DELETE /satellites/:id </Code>: Delete the satellite with the
        given id
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  ...serverCommunicationExerciseSlides
];
