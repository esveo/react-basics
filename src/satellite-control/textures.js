import { faFighterJet, faFlask, faPhone } from '@fortawesome/free-solid-svg-icons'
import * as Three from 'three'

/**
 * Maps satelite types to textures.
 */
const TEXTURES = {
  communication: makeTexture(faPhone),
  military: makeTexture(faFighterJet),
  science: makeTexture(faFlask),
}

function makeTexture(icon) {
  const [width, height, , , path] = icon.icon
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <path d="${path}" fill="white"/>
    </svg>`
  const image = document.createElement('img')
  image.src = 'data:image/svg+xml;utf8,' + svg
  const texture = new Three.Texture(image)
  texture.minFilter = Three.LinearFilter
  image.addEventListener('load', () => (texture.needsUpdate = true))
  return texture
}

export default TEXTURES
