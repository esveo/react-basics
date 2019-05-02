import SatelliteVisualisation from '@esveo/satellite-visualisation';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './Button';
import {
  createSatellite,
  deleteSatellite,
  getSatellites,
  updateSatellite
} from './satelliteApi';
import { SatelliteForm } from './SatelliteForm';
import { SatelliteSelect } from './SatelliteSelect';

export function App(props) {
  const [satellites, setSatellites] = useState([]);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState();

  useEffect(() => {
    getSatellites().then(satellites => setSatellites(satellites));
  }, []);

  const selectedSatellite =
    selectedSatelliteId && satellites.find(s => s.id === selectedSatelliteId);

  async function handleSave(satellite) {
    if (!selectedSatelliteId) {
      const created = await createSatellite(satellite);
      setSatellites(s => [...s, created]);
      return;
    }
    const updated = await updateSatellite(satellite);
    setSatellites(oldSatellites =>
      oldSatellites.map(s => (s.id === selectedSatelliteId ? updated : s))
    );
  }

  function handleDelete(satellite) {
    deleteSatellite(satellite);
    setSatellites(oldSatellites =>
      oldSatellites.filter(s => s.id !== satellite.id)
    );
  }
  return (
    <div className="satellite-control-app">
      <div className="satellite-select">
        <SatelliteSelect
          selectedSatelliteId={selectedSatelliteId}
          onChange={setSelectedSatelliteId}
          satellites={satellites}
        />
        <Button onClick={() => setSelectedSatelliteId()}>Create new</Button>
      </div>
      <div className="satellite-details">
        <SatelliteForm
          onSave={handleSave}
          satellite={selectedSatellite}
          onDelete={handleDelete}
        />
      </div>
      <div className="satellite-visualisation">
        <SatelliteVisualisation
          satellites={satellites}
          selectedSatelliteId={selectedSatelliteId}
        />
      </div>
    </div>
  );
}
