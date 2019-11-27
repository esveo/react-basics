import SatelliteVisualisation from '@esveo/satellite-visualisation';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
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
  const match = useRouteMatch('/:satelliteId');
  const selectedSatelliteId = match && match.params.satelliteId;
  const history = useHistory();

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
      <div className="satellite-link-select">
        <SatelliteSelect
          selectedSatelliteId={selectedSatelliteId}
          satellites={satellites}
        />
        <Button onClick={() => history.push('/')}>Create new</Button>
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
