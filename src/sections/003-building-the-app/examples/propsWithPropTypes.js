import { array, func, string } from 'prop-types';

const propTypes = {
  placeholder: string,
  items: array.isRequired,
  doesItemMatchFilter: func.isRequired,
  itemSorter: func.isRequired,
  renderItem: func.isRequired
};
function List(props) {
  // ...
}
List.propTypes = propTypes;

// Usage
let x = (
  <List
    items={[]}
    doesItemMatchFilter={() => {}}
    // ...
  />
);
