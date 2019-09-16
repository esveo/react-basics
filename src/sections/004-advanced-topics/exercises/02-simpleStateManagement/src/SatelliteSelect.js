import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalSatellites } from './Satellites';
import './SatelliteSelect.css';

export function SatelliteSelect({ selectedSatelliteId }) {
  const { satellites } = useGlobalSatellites();
  return (
    <ul className="satellite-link-select-list">
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
}

SatelliteSelect.propTypes = {
  selectedSatelliteId: PropTypes.string
};
