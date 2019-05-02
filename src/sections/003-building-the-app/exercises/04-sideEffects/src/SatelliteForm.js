import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { Button } from './Button';
import './SatelliteForm.css';

const defaultFormState = {
  name: '',
  reverse: false,
  angle: 1,
  type: 'communication'
};

export function SatelliteForm(props) {
  const [formState, setFormState] = useState(
    props.satellite || defaultFormState
  );

  function handleChange(value, name) {
    setFormState(oldState => ({ ...oldState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSave(formState);
  }

  const handleReset = useMemo(
    () =>
      function handleReset() {
        setFormState(props.satellite || defaultFormState);
      },
    [props.satellite]
  );

  function handleDelete() {
    props.onDelete(props.satellite);
  }

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  return (
    <form className="satellite-form" onSubmit={handleSubmit}>
      <h1>Id: {props.satellite ? props.satellite.id : '<new>'}</h1>
      <div className="satellite-form--field-wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={e => handleChange(e.target.value, e.target.id)}
        />
      </div>
      <div className="satellite-form--field-wrapper">
        <label htmlFor="reverse">Reverse</label>
        <label>
          <input
            type="checkbox"
            id="reverse"
            checked={formState.reverse}
            onChange={e => handleChange(e.target.checked, e.target.id)}
          />
          Fly counter-clockwise against earth's rotation.
        </label>
      </div>
      <div className="satellite-form--field-wrapper">
        <label htmlFor="angle">Angle</label>
        <input
          type="range"
          min="0"
          step="1"
          max="360"
          id="angle"
          value={formState.angle}
          onChange={e => handleChange(Number(e.target.value), e.target.id)}
        />
      </div>
      <div className="satellite-form--field-wrapper">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={formState.type}
          onChange={e => handleChange(e.target.value, e.target.id)}
        >
          <option value="communication">Communication</option>
          <option value="military">Military</option>
          <option value="science">Science</option>
        </select>
      </div>

      <div className="satellite-form--actions">
        <Button
          disabled={!formState.name || formState.name.trim().length === 0}
          type="submit"
        >
          Save
        </Button>
        <Button onClick={handleReset}>Reset</Button>
        <Button disabled={!props.satellite} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </form>
  );
}

SatelliteForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  satellite: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reverse: PropTypes.bool.isRequired,
    angle: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['communication', 'military', 'science']).isRequired
  })
};
