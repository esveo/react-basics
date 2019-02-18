import styled from '@emotion/styled/macro';
import {
  List as SpectacleList,
  ListItem as SpectacleListItem
} from 'spectacle';
export const List = styled(SpectacleList)`
  && {
    list-style-position: initial;
    list-style-type: none;
    margin-top: 1em;
    padding-left: 1em;
    position: relative;
  }
`;

export const ListItem = styled(SpectacleListItem)`
  && {
    font-size: 1em;
    line-height: 1.3em;
    padding-bottom: 0.5em;

    ${List} {
      margin-top: 0.5em;
    }

    & & {
      font-size: 0.9em;
    }

    :before {
      width: 1em;
      content: '▪';

      position: absolute;
      left: 0;
      color: rgb(63, 167, 254);
    }
  }
`;
