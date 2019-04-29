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
