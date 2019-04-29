import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { SatelliteForm } from './SatelliteForm';
import { SatelliteSelect } from './SatelliteSelect';

export function App(props) {
  const [satellites, setSatellites] = useState(dummyData);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState();

  const selectedSatellite =
    selectedSatelliteId && satellites.find(s => s.id === selectedSatelliteId);

  function handleSave(satellite) {
    if (!selectedSatelliteId) {
      setSatellites(s => [
        ...s,
        { id: (Math.random() * 99999).toFixed(0), ...satellite }
      ]);
      return;
    }
    setSatellites(oldSatellites =>
      oldSatellites.map(s =>
        s.id === selectedSatelliteId ? { ...s, ...satellite } : s
      )
    );
  }

  function handleDelete(satellite) {
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
      <div className="satellite-visualization" />
    </div>
  );
}

const dummyData = [
  {
    id: '0',
    name: 'International Space Station',
    type: 'science',
    speed: 3,
    reverse: false
  },
  {
    id: '1',
    name: 'Hubble Space Telescope',
    type: 'science',
    speed: 1,
    reverse: true
  },
  {
    id: '2',
    name: 'GoldenEye',
    type: 'military',
    speed: 2,
    reverse: true
  },
  {
    id: '3',
    name: 'LANDSAT-7',
    type: 'science',
    speed: 1.5,
    reverse: false
  },
  {
    id: '4',
    name: 'Galaxy 14',
    type: 'communication',
    speed: 0.8,
    reverse: false
  },
  {
    id: '5',
    name: 'GPS IIR-11',
    type: 'communication',
    speed: 1,
    reverse: true
  }
];
