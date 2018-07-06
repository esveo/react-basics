import { faFighterJet, faFlask, faPhone } from '@fortawesome/free-solid-svg-icons'

/**
 * Maps sattelite types to a description.
 */
const SATELLITE_TYPE_MAP = {
  communication: {
    name: 'Communication',
    icon: faPhone,
  },
  military: {
    name: 'Military',
    icon: faFighterJet,
  },
  science: {
    name: 'Science',
    icon: faFlask,
  },
}

export { SATELLITE_TYPE_MAP }
