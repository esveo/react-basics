import styled from '@emotion/styled/macro';
import React from 'react';
import { meetingReactExerciseSlides } from '../../sections/001-intro/exercises/02-meetingReact/slides';
import { usingBuildChainExerciseSlides } from '../../sections/001-intro/exercises/03-usingBuildChain/slides';
import { introSlides } from '../../sections/001-intro/slides';
import { preambelSlides } from '../../sections/001-intro/slides/01-preambelSlides';
import { meetingReactSlides } from '../../sections/001-intro/slides/02-meetingReactSlides';
import { usingBuildChainSlides } from '../../sections/001-intro/slides/03-usingBuildChainSlides';
import { fromStaticJSXToComponentsExerciseSlides } from '../../sections/002-first-steps/exercises/01-fromStaticJSXToComponents/slides';
import { dataFlowExerciseSlides } from '../../sections/002-first-steps/exercises/02-dataFlow/slides';
import { introducingStateExerciseSlides } from '../../sections/002-first-steps/exercises/03-introducingState/slides';
import { firstStepsSlides } from '../../sections/002-first-steps/slides';
import { fromStaticJSXTOComponentsSlides } from '../../sections/002-first-steps/slides/01-fromStaticJSXToComponents';
import { destructuringAndSpreadSlides } from '../../sections/002-first-steps/slides/02-destructuringAndSpread';
import { dataFlowSlides } from '../../sections/002-first-steps/slides/03-dataFlow';
import { introducingStateSlides } from '../../sections/002-first-steps/slides/04-introducingState';
import { satelliteSelectExerciseSlides } from '../../sections/003-building-the-app/exercises/01-satelliteSelect/slides';
import { usingSmallerComponentsExerciseSlides } from '../../sections/003-building-the-app/exercises/02-usingSmallerComponents/slides';
import { satelliteFormExerciseSlides } from '../../sections/003-building-the-app/exercises/03-satelliteForm/slides';
import { sideEffectsExerciseSlides } from '../../sections/003-building-the-app/exercises/04-sideEffects/slides';
import { serverCommunicationExerciseSlides } from '../../sections/003-building-the-app/exercises/05-serverCommunication/slides';
import { externalPackagesExerciseSlides } from '../../sections/003-building-the-app/exercises/06-externalPackages/slides';
import { buildingTheAppSlides } from '../../sections/003-building-the-app/slides';
import { satelliteSelectSlides } from '../../sections/003-building-the-app/slides/01-satelliteSelect';
import { usingSmallerComponentsSlides } from '../../sections/003-building-the-app/slides/02-usingSmallerComponents';
import { satelliteFormSlides } from '../../sections/003-building-the-app/slides/03-satelliteForm';
import { sideEffectsSlides } from '../../sections/003-building-the-app/slides/04-sideEffects';
import { serverCommunicationSlides } from '../../sections/003-building-the-app/slides/05-serverCommunication';
import { externalPackagesSlides } from '../../sections/003-building-the-app/slides/06-externalPackages';
import { routingExerciseSlides } from '../../sections/004-advanced-topics/exercises/01-routing/slides';
import { simpleStateManagementExerciseSlides } from '../../sections/004-advanced-topics/exercises/02-simpleStateManagement/slides';
import { reducerPatternExerciseSlides } from '../../sections/004-advanced-topics/exercises/03-reducerPattern/slides';
import { performanceExerciseSlides } from '../../sections/004-advanced-topics/exercises/04-performance/slides';
import { testingExerciseSlides } from '../../sections/004-advanced-topics/exercises/05-testing/slides';
import { advancedTopicsSlides } from '../../sections/004-advanced-topics/slides';
import { routingSlides } from '../../sections/004-advanced-topics/slides/01-routing';
import { simpleStateManagementSlides } from '../../sections/004-advanced-topics/slides/02-simpleStateManagement';
import { reducerPatternSlides } from '../../sections/004-advanced-topics/slides/03-reducerPattern';
import { classesSlides } from '../../sections/004-advanced-topics/slides/04-classes';
import { stylingInReactSlides } from '../../sections/004-advanced-topics/slides/05-stylingInReact';
import { performanceSlides } from '../../sections/004-advanced-topics/slides/06-performance';
import { testingSlides } from '../../sections/004-advanced-topics/slides/07-testing';
import { globalSlides } from '../../sections/globalSlides';
import { Column, Columns } from './Column';
import { LinkToSlides } from './LinkToSlide';
import { List, ListItem } from './List';

export function TOCSlideContent({ slide }) {
  const chapters = [
    {
      name: 'Introduction',
      slides: introSlides,
      childChapters: [
        {
          name: 'Preambel',
          slides: preambelSlides
        },
        {
          name: 'Meeting React',
          slides: meetingReactSlides,
          exercise: meetingReactExerciseSlides
        },
        {
          name: 'Using the build chain',
          slides: usingBuildChainSlides,
          exercise: usingBuildChainExerciseSlides
        }
      ]
    },
    {
      name: 'First steps',
      slides: firstStepsSlides,
      childChapters: [
        {
          name: 'From static JSX to Components',
          slides: fromStaticJSXTOComponentsSlides,
          exercise: fromStaticJSXToComponentsExerciseSlides
        },
        {
          name: 'Destructuring and spread',
          slides: destructuringAndSpreadSlides
        },
        {
          name: 'Data Flow',
          slides: dataFlowSlides,
          exercise: dataFlowExerciseSlides
        },
        {
          name: 'Introducing state',
          slides: introducingStateSlides,
          exercise: introducingStateExerciseSlides
        }
      ]
    },
    {
      name: 'Building the app',
      slides: buildingTheAppSlides,
      childChapters: [
        {
          name: 'Satellite select',
          slides: satelliteSelectSlides,
          exercise: satelliteSelectExerciseSlides
        },
        {
          name: 'Using smaller components',
          slides: usingSmallerComponentsSlides,
          exercise: usingSmallerComponentsExerciseSlides
        },
        {
          name: 'Satellite form',
          slides: satelliteFormSlides,
          exercise: satelliteFormExerciseSlides
        },
        {
          name: 'Side effects',
          slides: sideEffectsSlides,
          exercise: sideEffectsExerciseSlides
        },
        {
          name: 'Server communication',
          slides: serverCommunicationSlides,
          exercise: serverCommunicationExerciseSlides
        },
        {
          name: 'External Packages',
          slides: externalPackagesSlides,
          exercise: externalPackagesExerciseSlides
        }
      ]
    },
    {
      name: 'Advanced topics',
      slides: advancedTopicsSlides,
      childChapters: [
        {
          name: 'Routing',
          slides: routingSlides,
          exercise: routingExerciseSlides
        },
        {
          name: 'Simple state management',
          slides: simpleStateManagementSlides,
          exercise: simpleStateManagementExerciseSlides
        },
        {
          name: 'Reducer pattern',
          slides: reducerPatternSlides,
          exercise: reducerPatternExerciseSlides
        },
        {
          name: 'Classes',
          slides: classesSlides
        },
        {
          name: 'Styling in React',
          slides: stylingInReactSlides
        },
        {
          name: 'Performance',
          slides: performanceSlides,
          exercise: performanceExerciseSlides
        },
        {
          name: 'Testing',
          slides: testingSlides,
          exercise: testingExerciseSlides
        }
      ]
    }
  ];
  const slides = globalSlides;

  const slidesIndex = slidesToFind => slides.indexOf(slidesToFind[0]) + 1;
  const tocSlideIndex = slidesIndex([slide()]);

  function column(from, to) {
    return (
      <Column>
        <List>
          {chapters.slice(from, to).map(chapter => (
            <ListItem key={chapter.name}>
              {chapter.name}
              {chapter.childChapters && (
                <List>
                  {chapter.childChapters.map(chapter => (
                    <ListItem key={chapter.name}>
                      <TOCLink
                        slides={chapter.slides}
                        data-current={
                          slidesIndex(chapter.slides) === tocSlideIndex
                        }
                      >
                        {chapter.name}
                      </TOCLink>
                    </ListItem>
                  ))}
                </List>
              )}
            </ListItem>
          ))}
        </List>
      </Column>
    );
  }

  return (
    <Columns>
      {column(0, 2)}
      {column(2, 3)}
      {column(3, 4)}
    </Columns>
  );
}

const TOCLink = styled(LinkToSlides)`
  /* text-decoration: ${p => (p['data-done'] ? 'line-through' : 'none')}; */
  font-weight: ${p => (p['data-current'] ? 'bold' : 'normal')};
`;
