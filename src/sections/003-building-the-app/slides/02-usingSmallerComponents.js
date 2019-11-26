import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { dash } from '../../../__helpers/dash';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { ALink } from '../../../__helpers/slides/Link';
import { List, ListItem } from '../../../__helpers/slides/List';
import { Text } from '../../../__helpers/slides/Text';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { usingSmallerComponentsExerciseSlides } from '../exercises/02-usingSmallerComponents/slides';

export const usingSmallerComponentsSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="React's goal: Smaller composable components" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>Single purpose</ListItem>
          <ListItem>Complex logic with easy API</ListItem>
          <ListItem>Fits one use case exactly</ListItem>
          <ListItem>Not reusable</ListItem>
        </List>
      </Column>
      <Column>
        <FontAwesomeIcon style={{ fontSize: '3em' }} icon={faArrowsAltH} />
      </Column>
      <Column>
        <List>
          <ListItem>General purpose</ListItem>
          <ListItem>Complex logic leads to very complex API</ListItem>
          <ListItem>Can be reused in multiple places</ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="React's goal: Smaller composable components" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>Single purpose</ListItem>
          <ListItem>Complex logic with easy API</ListItem>
          <ListItem>Fits one use case exactly</ListItem>
          <ListItem>Not reusable</ListItem>
        </List>
      </Column>
      <Column>
        <FontAwesomeIcon style={{ fontSize: '3em' }} icon={faArrowsAltH} />
      </Column>
      <Column>
        <List>
          <ListItem>General purpose</ListItem>
          <ListItem>Complex logic leads to very complex API</ListItem>
          <ListItem>Can be reused in multiple places</ListItem>
        </List>
      </Column>
    </Columns>
    <Text size={1.5}>
      Solution: Design <b>small reusable components</b>, that can be composed
      for complex use cases.
    </Text>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Options for satellite select" />
    <Columns>
      <Column>
        <ColumnHead>
          All in one
          <br />
          SatelliteSelect
        </ColumnHead>
        <List>
          <ListItem>Only usable to select satellites</ListItem>
          <ListItem>
            Only 2 props: <Code>selectedSatelliteId</Code> and{' '}
            <Code>setSelectedSatellite</Code>
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>
          Reusable
          <br />
          Select
        </ColumnHead>
        <List>
          <ListItem>Usable for all selects</ListItem>
          <ListItem>
            More props necessary: <Code>selectedItemKey</Code>,{' '}
            <Code>setSelectedItemKey</Code>, <Code>renderItem</Code>,{' '}
            <Code>getItemKey</Code>, <Code>items</Code>...
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>Reusable Select using a reusable List</ColumnHead>
        <List>
          <ListItem>
            No difference for select users. (usage of <Code>List</Code> is
            implementation detail)
          </ListItem>
          <ListItem>
            Additional option to reuse the List component whenever lists need to
            be rendered.
          </ListItem>
          <ListItem>
            Additionally more props on List: <Code>onItemClick</Code>,{' '}
            <Code>getItemClassName</Code>...
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Props and PropTypes" />
    <Text>How should this component be used?</Text>
    <div style={{ fontSize: '0.6em' }}>
      <CodeBlock source={raw('../examples/propsWithoutPropTypes.js')} />
    </div>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Props and PropTypes" />
    <Columns align="center">
      <Column>
        <ColumnHead>propTypes for validation and documentation</ColumnHead>
        <List>
          <ListItem>Clear definition of the interface of a component.</ListItem>
          <ListItem>
            Checked at runtime and alerts the developer when a prop is
            missing/invalid.
          </ListItem>
          <ListItem>
            <ALink
              href="https://www.npmjs.com/package/prop-types"
              target="_blank"
            >
              prop-types on npm
            </ALink>
          </ListItem>
        </List>
      </Column>
      <Column weight={2} style={{ fontSize: '0.9em' }}>
        <CodeBlock source={raw('../examples/propsWithPropTypes.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,

  <Slide>
    <Header text={`Node Package Manager ${dash} npm`} />
    <List>
      <ListItem>
        <b>Largest collection of open source packages in the world</b>
      </ListItem>
      <ListItem>
        More than 1 million packages; ~15 billion downloads per week
      </ListItem>
      <ListItem>
        Similar to <Code>maven</Code>, <Code>nuget</Code> or{' '}
        <Code>composer</Code>
      </ListItem>
      <ListItem>
        All installed packages are saved in the <Code>node_modules</Code>{' '}
        directory and referenced in the <Code>package.json</Code>
      </ListItem>
      <ListItem>
        <Code>npm i --save react</Code>
      </ListItem>
    </List>
    <Footer />
  </Slide>,

  <Slide>
    <Header text="Defining interfaces with PropTypes" />
    <Text>Be as specific as possible</Text>
    <CodeBlock m="0" source={raw('../examples/propTypesSpecificity.js')} />
    <Footer />
  </Slide>,

  ...usingSmallerComponentsExerciseSlides
];
