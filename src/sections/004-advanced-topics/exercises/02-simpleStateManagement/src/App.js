import SatelliteVisualisation from '@esveo/satellite-visualisation';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './App.css';
import { Button } from './Button';
import { SatelliteForm } from './SatelliteForm';
import { useGlobalSatellites } from './Satellites';
import { SatelliteSelect } from './SatelliteSelect';

export function App(props) {
  const match = useRouteMatch('/:satelliteId');
  const selectedSatelliteId = match && match.params.satelliteId;
  const history = useHistory();

  const { satellites } = useGlobalSatellites();

  const selectedSatellite =
    selectedSatelliteId && satellites.find(s => s.id === selectedSatelliteId);

  return (
    <div className="satellite-control-app">
      <div className="satellite-link-select">
        <SatelliteSelect selectedSatelliteId={selectedSatelliteId} />
        <Button onClick={() => history.push('/')}>Create new</Button>
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
