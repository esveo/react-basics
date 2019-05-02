import React from 'react';
import { Slide } from 'spectacle';
import { Footer } from '../../../../__helpers/slides/Footer';
import { Header } from '../../../../__helpers/slides/Header';
import { ALink, Link } from '../../../../__helpers/slides/Link';
import { List, ListItem } from '../../../../__helpers/slides/List';
import { pathToSolution } from '../../../../__helpers/solutions/pathToSolution';
import { key } from './key';
import SatelliteVisualisation from '@esveo/satellite-visualisation';

export const externalPackagesExerciseSlides = [
  <Slide>
    <Header text={`Integrate @esveo/satellite-visualisation`} tag="Exercise" />
    <div style={{ height: 300 }}>
      <SatelliteVisualisation
        satellites={[
          {
            id: '0',
            name: 'International Space Station',
            type: 'science',
            angle: 15,
            reverse: false
          },
          {
            id: '1',
            name: 'Hubble Space Telescope',
            type: 'science',
            angle: 40,
            reverse: true
          }
        ]}
        selectedSatelliteId="0"
      />
    </div>
    <List>
      <ListItem>
        Take a look at the following npm package and try to integrate it into
        your app:
        <br />
        <ALink
          target="_new"
          href="https://www.npmjs.com/package/@esveo/satellite-visualisation"
        >
          https://www.npmjs.com/package/@esveo/satellite-visualisation
        </ALink>
      </ListItem>
      <ListItem>
        Compare your result with the{' '}
        <Link to={pathToSolution(key)}>solution.</Link>
      </ListItem>
    </List>
    <Footer />
  </Slide>
];
