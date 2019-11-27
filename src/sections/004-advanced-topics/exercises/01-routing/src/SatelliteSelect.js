import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './SatelliteSelect.css';

export function SatelliteSelect({ selectedSatelliteId, satellites }) {
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
          <Link to={'/' + s.id}>{s.name}</Link>
        </li>
      ))}
    </ul>
  );
}

SatelliteSelect.propTypes = {
  selectedSatelliteId: PropTypes.string,
  satellites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      reverse: PropTypes.bool.isRequired,
      angle: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['communication', 'military', 'science']).isRequired
    })
  ).isRequired
};
