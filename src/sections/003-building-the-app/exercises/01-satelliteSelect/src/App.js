import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';

export function App(props) {
  const [satellites] = useState(dummyData);
  const [selectedSatellite, setSelectedSatellite] = useState();

  function onSatelliteClick(satellite) {
    setSelectedSatellite(satellite);
  }

  return (
    <div className="satellite-control-app">
      <div className="satellite-select">
        <ul>
          {satellites.map(s => (
            <li
              key={s.id}
              className={
                selectedSatellite && selectedSatellite.id === s.id
                  ? '__selected'
                  : ''
              }
              onClick={() => onSatelliteClick(s)}
            >
              {s.name}
            </li>
          ))}
        </ul>
        <Button onClick={() => onSatelliteClick()}>Create new</Button>
      </div>
      <div className="satellite-details">
        {selectedSatellite && selectedSatellite.name}
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
    angle: 45,
    reverse: false
  },
  {
    id: '1',
    name: 'Hubble Space Telescope',
    type: 'science',
    angle: 160,
    reverse: true
  },
  {
    id: '2',
    name: 'GoldenEye',
    type: 'military',
    angle: 20,
    reverse: true
  },
  {
    id: '3',
    name: 'LANDSAT-7',
    type: 'science',
    angle: 260,
    reverse: false
  },
  {
    id: '4',
    name: 'Galaxy 14',
    type: 'communication',
    angle: 350,
    reverse: false
  },
  {
    id: '5',
    name: 'GPS IIR-11',
    type: 'communication',
    angle: 200,
    reverse: true
  }
];
