import SatelliteVisualisation from '@esveo/satellite-visualisation';
import React from 'react';
import './App.css';
import { Button } from './Button';
import { SatelliteForm } from './SatelliteForm';
import { useGlobalSatellites } from './Satellites';
import { SatelliteSelect } from './SatelliteSelect';

export function App(props) {
  const { satellites } = useGlobalSatellites();
  const selectedSatelliteId = props.match && props.match.params.satelliteId;

  const selectedSatellite = satellites.find(s => s.id === selectedSatelliteId);

  return (
    <div className="satellite-control-app">
      <div className="satellite-link-select">
        <SatelliteSelect
          selectedSatelliteId={selectedSatelliteId}
          satellites={satellites}
        />
        <Button onClick={() => props.history.push('/')}>Create new</Button>
      </div>
      <div className="satellite-details">
        <SatelliteForm satellite={selectedSatellite} />
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
