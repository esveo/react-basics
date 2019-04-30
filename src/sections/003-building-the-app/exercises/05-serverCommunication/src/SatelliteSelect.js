import PropTypes from 'prop-types';
import React from 'react';
import './SatelliteSelect.css';

export function SatelliteSelect({ onChange, selectedSatelliteId, satellites }) {
  function onSatelliteClick(satellite) {
    onChange(satellite.id);
  }

  return (
    <ul className="satellite-select-list">
      {satellites.map(s => (
        <li
          key={s.id}
          className={
            selectedSatelliteId && selectedSatelliteId === s.id
              ? '__selected'
              : ''
          }
          onClick={() => onSatelliteClick(s)}
        >
          {s.name}
        </li>
      ))}
    </ul>
  );
}

SatelliteSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedSatelliteId: PropTypes.string,
  satellites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      reverse: PropTypes.bool.isRequired,
      speed: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['communication', 'military', 'science']).isRequired
    })
  ).isRequired
};
