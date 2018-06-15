import FS from 'fs-extra'

import generateSolutions, { SOLUTIONS_DIR } from './helpers/generateSolutions'
import generateToc from './helpers/generateToc'

FS.emptyDirSync(SOLUTIONS_DIR)
generateToc()
generateSolutions()
