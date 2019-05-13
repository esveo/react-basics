import { useEffect, useMemo, useReducer } from 'react';
import { createContainer } from 'unstated-next';
import {
  createSatellite,
  deleteSatellite,
  getSatellites,
  updateSatellite
} from './satelliteApi';

const initialSatellitesState = [];

export function satelliteReducer(state, action) {
  switch (action.type) {
    case 'SATELLITES_LOADED':
      return action.satellites;
    case 'SATELLITE_CREATED':
      return [...state, action.satellite];
    case 'SATELLITE_UPDATED':
      return state.map(s =>
        s.id === action.satellite.id ? action.satellite : s
      );
    case 'SATELLITE_DELETED':
      return state.filter(s => s.id !== action.satellite.id);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function useSatellites() {
  const [satellites, dispatch] = useReducer(
    satelliteReducer,
    initialSatellitesState
  );

  useEffect(() => {
    getSatellites().then(satellites =>
      dispatch({ type: 'SATELLITES_LOADED', satellites })
    );
  }, []);

  async function save(satellite) {
    if (!satellite.id) {
      const created = await createSatellite(satellite);
      dispatch({ type: 'SATELLITE_CREATED', satellite: created });
      return;
    }
    const updated = await updateSatellite(satellite);
    dispatch({ type: 'SATELLITE_UPDATED', satellite: updated });
  }

  function remove(satellite) {
    deleteSatellite(satellite);
    dispatch({ type: 'SATELLITE_DELETED', satellite });
  }

  const contextValue = useMemo(() => ({ satellites, save, remove }), [
    satellites
  ]);

  return contextValue;
}

export const Satellites = createContainer(useSatellites);
