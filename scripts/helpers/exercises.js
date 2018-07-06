import FS from 'fs-extra'
import Path from 'path'

const EXERCISES_DIR = Path.join(__dirname, '../../exercises')

/**
 * All available exercises.
 */
const EXERCISES = FS.readdirSync(EXERCISES_DIR).map(fileName => {
  const name = Path.basename(fileName, '.md')
  const index = +name.substring(0, 2)
  const filePath = Path.join(EXERCISES_DIR, fileName)
  const fileContents = FS.readFileSync(filePath).toString('utf-8')
  const title = fileContents.split('\n')[0].substring(2)
  return { index, name, title }
})

export default EXERCISES
export { EXERCISES_DIR }
