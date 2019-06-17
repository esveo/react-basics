// import selected variables.
import { y, func1 } from '../some/relative/path';

// import all variables
import * as myModule from '../some/relative/path';

// import default export
import func2 from '../some/relative/path';

// combine default and named imports
import func2, { func1 } from '../some/relative/path';

// rename named exports
import { func1 as myCustomFunction } from '../some/relative/path';

// Add the file to the bundle without importing a specific variable
import '../some/relative/path.css';
