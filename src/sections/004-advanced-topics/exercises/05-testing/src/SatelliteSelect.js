import PropTypes from 'prop-types';
import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Satellites } from './Satellites';
import './SatelliteSelect.css';

export const SatelliteSelect = memo(function SatelliteSelect({
  selectedSatelliteId
}) {
  const { satellites } = Satellites.useContainer();
  let sum = useMemo(() => calculateNumber(), []);
  return (
    <ul className="satellite-link-select-list">
      {sum}
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

SatelliteSelect.propTypes = {
  selectedSatelliteId: PropTypes.string
};

function calculateNumber() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}
