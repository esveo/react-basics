import PropTypes from 'prop-types';
import React from 'react';
import './Modal.css';

const propTypes = {
  children: PropTypes.node
};

export function Modal({ children }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">{children}</div>
    </div>
  );
}

Modal.propTypes = propTypes;
