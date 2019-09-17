import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react';
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
      return state.map(satellite =>
        satellite.id === action.satellite.id
          ? { ...satellite, ...action.satellite }
          : satellite
      );
    case 'SATELLITE_DELETED':
      return state.filter(satellite => satellite.id !== action.satellite.id);
    default:
      throw new Error('Unexpected action', action);
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

  const satelliteUtils = useMemo(() => {
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

    return { satellites, save, remove };
  }, [satellites]);

  return satelliteUtils;
}

const SatelliteContext = createContext();

export function GlobalSatelliteProvider({ children }) {
  const utils = useSatellites();
  return (
    <SatelliteContext.Provider value={utils}>
      {children}
    </SatelliteContext.Provider>
  );
}

export function useGlobalSatellites() {
  const contextValue = useContext(SatelliteContext);
  if (!contextValue) throw new Error('No Provider for SatelliteContext found!');
  return contextValue;
}
