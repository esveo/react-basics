import Chokidar from 'chokidar'
import FS from 'fs-extra'
import Bundler from 'parcel-bundler'
import prettyTime from 'pretty-time'

import { EXERCISES_DIR } from './helpers/exercises'
import generateSolutions, { SOLUTIONS_DIR, SRC_DIR } from './helpers/generateSolutions'
import generateToc, { TOC_FILE } from './helpers/generateToc'

const bundler = new Bundler(TOC_FILE, { logLevel: 1 })
bundler.on('buildEnd', () => {
  const diff = process.hrtime(start)
  process.stdout.write(`\rFinished! (took ${prettyTime(diff)})`)
})

FS.emptyDirSync(bundler.options.outDir)
FS.emptyDirSync(SOLUTIONS_DIR)

let start = process.hrtime()
process.stdout.write('Initial build...')
Chokidar.watch([EXERCISES_DIR, SRC_DIR]).on('ready', async function() {
  generateSolutions()
  generateToc()
  await bundler.serve()

  this.on('all', (event, path) => {
    switch (event) {
      case 'add':
      case 'change':
        start = process.hrtime()
        process.stdout.write('\rBuilding...             ')
        generateSolutions([path])
        break
    }
  })
})
