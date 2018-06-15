import FS from 'fs-extra'
import walkSync from 'klaw-sync'
import { difference, dropWhile, range, takeWhile, union } from 'lodash'
import Path from 'path'

import EXERCISES from './exercises'

const ALL_INDEXES = EXERCISES.map(({ index }) => index)

const SOLUTIONS_DIR = Path.join(__dirname, '../../solutions')
const SRC_DIR = Path.join(__dirname, '../../src')

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
      FS.removeSync(outputFilePath(name))
    }

    const indexesStack = new IndexesStack()
    for (const line of lines) {
      let patternMatched = false
      for (const { pattern, action } of INTERPRETER_PATTERNS) {
        const match = pattern.exec(line)
        if (match) {
          action({ indexesStack, match })
          patternMatched = true
          break
        }
      }
      if (!patternMatched) write(line)
    }

    function write(originalLine) {
      const indexes = indexesStack.peek()
      for (const { index, name, title } of EXERCISES) {
        if (!indexes.includes(index)) continue
        let line = originalLine
        for (const { pattern, replace } of REPLACERS) {
          line = line.replace(pattern, replace({ name, title }))
        }
        FS.ensureFileSync(outputFilePath(name))
        FS.appendFileSync(outputFilePath(name), line + '\n')
        changes.add(outputFilePath)
      }
    }

    function outputFilePath(exerciseName) {
      return Path.join(SOLUTIONS_DIR, exerciseName, fileName)
    }
  }
  return [...changes]
}

function allFilePaths() {
  return walkSync(SRC_DIR, { nodir: true }).map(({ path }) => path)
}

export function parseIndexSpec(spec) {
  const parts = spec.split(',')
  const parsedParts = parts.map(function parse(part) {
    for (const { pattern, result } of INDEX_PARSER_PATTERNS) {
      const match = pattern.exec(part)
      if (match) return result({ match, parse })
    }
    throw new Error('No matching index spec parser pattern found')
  })
  return union(...parsedParts)
}

const INDEX_PARSER_PATTERNS = [
  {
    pattern: /^!(\d+|\d+\-\d+)$/,
    result: ({ match, parse }) => difference(ALL_INDEXES, parse(match[1])),
  },
  {
    pattern: /^\<(\d+)$/,
    result: ({ match }) => takeWhile(ALL_INDEXES, i => i < +match[1]),
  },
  {
    pattern: /^\<\=(\d+)$/,
    result: ({ match }) => takeWhile(ALL_INDEXES, i => i <= +match[1]),
  },
  {
    pattern: /^\>(\d+)$/,
    result: ({ match }) => dropWhile(ALL_INDEXES, i => i <= +match[1]),
  },
  {
    pattern: /^\>\=(\d+)$/,
    result: ({ match }) => dropWhile(ALL_INDEXES, i => i < +match[1]),
  },
  {
    pattern: /^(\d+)\-(\d+)$/,
    result: ({ match }) => range(+match[1], +match[2] + 1),
  },
  {
    pattern: /^(\d+)$/,
    result: ({ match }) => [+match[1]],
  },
]

class IndexesStack {
  constructor() {
    this._indexess = []
  }

  peek() {
    return this._indexess[0] || ALL_INDEXES
  }

  push(indexes) {
    this._indexess.unshift(indexes)
  }

  pop() {
    return this._indexess.shift()
  }
}

const INTERPRETER_PATTERNS = [
  {
    pattern: /#if (\S+)/,
    action: ({ indexesStack, match }) => indexesStack.push(parseIndexSpec(match[1])),
  },
  {
    pattern: /#else/,
    action: ({ indexesStack }) => indexesStack.push(difference(ALL_INDEXES, indexesStack.pop())),
  },
  {
    pattern: /#endif/,
    action: ({ indexesStack }) => indexesStack.pop(),
  },
]

const REPLACERS = [
  {
    pattern: /#title/,
    replace: ({ title }) => () => title,
  },
]

export default generateSolutions
export { SOLUTIONS_DIR, SRC_DIR }
