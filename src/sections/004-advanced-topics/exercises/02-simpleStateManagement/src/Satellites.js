import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
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

export const Satellites = createContainer(useSatellites);
