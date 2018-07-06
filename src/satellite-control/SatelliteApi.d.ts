/**
 * Delete a satellite.
 */
export function deleteSatellite(id: string): Promise<void>

/**
 * Load all available satellites.
 */
export function loadSatellites(): Promise<{ [id: string]: Satellite | undefined }>

/**
 * Save new or existing satellite.
 */
export function saveSatellite(satellite: Satellite): Promise<Satellite>

/**
 * The data of one satellite.
 */
export interface Satellite {
  id: string
  name: string
  reverse: boolean
  speed: number
  type: 'communication' | 'military' | 'science'
}
