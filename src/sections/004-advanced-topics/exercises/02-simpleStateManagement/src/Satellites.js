import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createSatellite,
  deleteSatellite,
  getSatellites,
  updateSatellite
} from './satelliteApi';

function useSatellites() {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites().then(satellites => setSatellites(satellites));
  }, []);

  async function save(satellite) {
    if (!satellite.id) {
      const created = await createSatellite(satellite);
      setSatellites(s => [...s, created]);
      return;
    }
    const updated = await updateSatellite(satellite);
    setSatellites(oldSatellites =>
      oldSatellites.map(s => (s.id === satellite.id ? updated : s))
    );
  }

  function remove(satellite) {
    deleteSatellite(satellite);
    setSatellites(oldSatellites =>
      oldSatellites.filter(s => s.id !== satellite.id)
    );
  }

  return { satellites, save, remove };
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
