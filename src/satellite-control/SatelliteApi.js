import DUMMY_DATA from './dummy-data'

const STORAGE_KEY = 'satellites-data'

let satellitesById = undefined
let nextId = 6

export function deleteSatellite(id) {
  initFromLocalStorage()
  delete satellitesById[id]
  saveToLocalStorage
  return Promise.resolve()
}

export function loadSatellites() {
  initFromLocalStorage()
  return Promise.resolve(satellitesById)
}

export function saveSatellite(satellite) {
  initFromLocalStorage()
  if (satellite.id === undefined) {
    const id = (nextId++).toString()
    satellite.id = id
    // TODO: randomize stuff
    satellitesById[id] = satellite
  } else {
    Object.assign(satellitesById[satellite.id], satellite)
  }
  saveToLocalStorage()
  return Promise.resolve(satellite)
}

function initFromLocalStorage() {
  if (satellitesById !== undefined) return
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw) {
    satellitesById = JSON.parse(raw)
  } else {
    satellitesById = {}
    for (const satellite of DUMMY_DATA) {
      satellitesById[satellite.id] = satellite
    }
    saveToLocalStorage()
  }
}

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(satellitesById))
}
