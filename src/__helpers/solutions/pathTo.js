import { allSolutions } from '../../sections/allSolutions';

export function pathTo(initFunction) {
  const index = allSolutions.findIndex(s => s.init === initFunction);
  return `solutions/${index}`;
}
