import React from 'react';
import './Button.css';

export function Button(props) {
  return (
    <button type="button" {...props} className="satellite-control-button" />
  );
}
