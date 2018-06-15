import FS from 'fs-extra'
import Path from 'path'

import EXERCISES from './exercises'
import { SOLUTIONS_DIR } from './generate-solutions'

const TOC_FILE = Path.join(SOLUTIONS_DIR, 'toc.html')

/**
 * Generate the table of contents for the exercises.
 */
function generateToc() {
  let toc = `<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>Table of Contents | React Basics by esveo</title>
</head>

<body>
  <h1>React Basics by esveo</h1>
  <nav>
    <ol>
      ${EXERCISES.map(
        ({ name, title }) => `<li><a href="${name}/index.html">${title}</a></li>`,
      ).join('\n    ')}
    </ol>
  </nav>
</body>

</html>
`
  FS.writeFileSync(TOC_FILE, toc)
}

export default generateToc
export { TOC_FILE }
