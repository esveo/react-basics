import raw from 'raw.macro';
import React from 'react';
import { Slide } from 'spectacle';
import { Code } from '../../../__helpers/slides/Code';
import { CodeBlock } from '../../../__helpers/slides/CodeBlock';
import { Column, ColumnHead, Columns } from '../../../__helpers/slides/Column';
import { Footer } from '../../../__helpers/slides/Footer';
import { Header } from '../../../__helpers/slides/Header';
import { List, ListItem } from '../../../__helpers/slides/List';
import { getTOCSlide } from '../../../__helpers/slides/TOCSlide';
import { dash } from '../../../__helpers/dash';
import { ALink } from '../../../__helpers/slides/Link';

export const stylingInReactSlides = [
  getTOCSlide(),
  <Slide>
    <Header text="Previously: import css files" />
    <Columns align="center">
      <Column>
        <List>
          <ListItem>Simply import the complete css file</ListItem>
          <ListItem>Use same classes in js and css</ListItem>
          <ListItem>
            <b>Problem</b>: Classes are global!
            <List>
              <ListItem>
                Styles of other components could be overwritten
              </ListItem>
              <ListItem>Other components could overwrite own styles</ListItem>
            </List>
          </ListItem>
        </List>
      </Column>
      <Column>
        <CodeBlock lang="css" source={raw('../examples/styling--css.css')} />
        <CodeBlock source={raw('../examples/styling--js.js')} />
      </Column>
    </Columns>
    <Footer />
  </Slide>,
  <Slide>
    <Header text="Alternatives" />
    <Columns>
      <Column>
        <ColumnHead>Naming conventions</ColumnHead>
        <List>
          <ListItem>Make class names longer to avoid clashes</ListItem>
          <ListItem>
            Example from BEM: <Code>.contact-form__status--error</Code>
          </ListItem>
          <ListItem>Can be enforce through Code Reviews</ListItem>
          <ListItem>Still only a convention</ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>CSS-Modules</ColumnHead>
        <List>
          <ListItem>Import css files as modules</ListItem>
          <ListItem>
            Classes will be transformed at compile-time into:
            [filename]_[classname]_[hash]
          </ListItem>
          <ListItem>
            <div style={{ fontSize: '0.7em' }}>
              <CodeBlock source={raw('../examples/styling--css-modules.js')} />
            </div>
          </ListItem>
          <ListItem>
            Usable in CRA by using <Code>.module.css</Code> extension
          </ListItem>
        </List>
      </Column>
      <Column>
        <ColumnHead>CSS-in-JS</ColumnHead>
        <List>
          <ListItem>
            Define your styles in JS:
            <div style={{ fontSize: '0.7em' }}>
              <CodeBlock source={raw('../examples/styling--css-in-js.js')} />
            </div>
          </ListItem>
        </List>
      </Column>
    </Columns>
    <Footer />
  </Slide>,
  <Slide>
    <Header text={`Styling in React ${dash} Remarks`} />
    <List>
      <ListItem>
        Advanced features like nesting selectors or auto-prefixes:
        <List>
          <ListItem>CRA has auto-prefixing enabled by default</ListItem>
          <ListItem>CRA supports SASS out of the box</ListItem>
          <ListItem>
            Most CSS-in-JS libraries support nesting and auto-prefixes
          </ListItem>
        </List>
      </ListItem>
      <ListItem>
        Popular CSS-in-JS libraries:
        <List>
          <ListItem>
            <ALink href="https://emotion.sh/docs/introduction" target="_blank">
              emotion
            </ALink>
          </ListItem>
          <ListItem>
            <ALink href="https://www.styled-components.com/" target="_blank">
              styled-components
            </ALink>
          </ListItem>
          <ListItem>
            <ALink
              href="https://cssinjs.org/?v=v10.0.0-alpha.25"
              target="_blank"
            >
              JSS
            </ALink>
          </ListItem>
          <ListItem>
            <ALink
              href="https://www.npmjs.com/package/styled-jsx"
              target="_blank"
            >
              styled-jsx
            </ALink>
          </ListItem>
        </List>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
