import FS from 'fs-extra'
import walkSync from 'klaw-sync'
import { difference, range, union } from 'lodash'
import Path from 'path'

import EXERCISES from './exercises'

const ALL_INDEXES = EXERCISES.map(({ index }) => index)

const SOLUTIONS_DIR = Path.join(__dirname, '../../solutions')
const SRC_DIR = Path.join(__dirname, '../../src')

const PARSER_PATTERNS = [
  {
    pattern: /#if (\S+)/,
    action({ match, setCurrentIndexes }) {
      const indexSpecs = match[1].split(',')
      const indexRanges = indexSpecs.map(indexSpec => {
        const [firstIndex, lastIndex = firstIndex] = indexSpec.split('-').map(x => +x)
        return range(firstIndex, lastIndex + 1)
      })
      const indexes = union(...indexRanges)
      setCurrentIndexes(indexes)
    },
  },
  {
    pattern: /#else/,
    action({ currentIndexes, setCurrentIndexes }) {
      const indexes = difference(ALL_INDEXES, currentIndexes)
      setCurrentIndexes(indexes)
    },
  },
  {
    pattern: /#endif/,
    action({ setCurrentIndexes }) {
      setCurrentIndexes(ALL_INDEXES)
    },
  },
  {
    pattern: /.*/,
    action({ line, writeLine }) {
      writeLine(line)
    },
  },
]

/**
 * Split the files into the solutions files for each exercise and returns changed files.
 * Defaults to splitting all available files.
 */
function generateSolutions(filePaths = allFilePaths()) {
  const changes = new Set()
  for (const filePath of filePaths) {
    const fileName = Path.relative(SRC_DIR, filePath)
    const fileContents = FS.readFileSync(filePath).toString('utf-8')
    const lines = fileContents.split('\n')
    lines.pop() // remove last empty line

    for (const { name } of EXERCISES) {
      FS.removeSync(filePathInExercise(name))
    }

    let currentIndexes = ALL_INDEXES
    for (const line of lines) {
      const { action, match } = parseLine(line)
      action({ currentIndexes, line, match, setCurrentIndexes, writeLine })
    }

    function parseLine(line) {
      for (const { pattern, action } of PARSER_PATTERNS) {
        const match = pattern.exec(line)
        if (match) return { action, match }
      }
      throw new Error('No matching parser found')
    }

    function setCurrentIndexes(indexes) {
      currentIndexes = indexes
    }

    function writeLine(line) {
      for (const { index, name, title } of EXERCISES) {
        if (!currentIndexes.includes(index)) continue
        line = line.replace('#title', title)
        FS.ensureFileSync(filePathInExercise(name))
        FS.appendFileSync(filePathInExercise(name), line + '\n')
        changes.add(filePathInExercise)
      }
    }

    function filePathInExercise(exerciseName) {
      return Path.join(SOLUTIONS_DIR, exerciseName, fileName)
    }
  }
  return [...changes]
}

function allFilePaths() {
  return walkSync(SRC_DIR, { nodir: true }).map(({ path }) => path)
}

if (require.main === module) {
  generateSolutions()
}

export default generateSolutions
export { SOLUTIONS_DIR, SRC_DIR }
