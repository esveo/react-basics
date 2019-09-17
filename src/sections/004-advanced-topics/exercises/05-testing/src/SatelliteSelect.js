import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalSatellites } from './Satellites';
import './SatelliteSelect.css';

export const SatelliteSelect = React.memo(function SatelliteSelect({
  selectedSatelliteId
}) {
  const { satellites } = useGlobalSatellites();
  const largeNumber = useMemo(() => calculateLargeNumber(), []);
  return (
    <ul className="satellite-link-select-list">
      {largeNumber}
      {satellites.map(s => (
        <li
          key={s.id}
          className={
            selectedSatelliteId && selectedSatelliteId === s.id
              ? '__selected'
              : ''
          }
        >
          <Link to={`/${s.id}`}>{s.name}</Link>
        </li>
      ))}
    </ul>
  );
});

function calculateLargeNumber() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

SatelliteSelect.propTypes = {
  selectedSatelliteId: PropTypes.string
};
