import React from 'react';
import rotate from '@internal/resources/images/logo-rotate.png';
import './Logo.scss';

export const Rotate = () => (
  <span className="logo logo-action logo-rotate">
      <img src={rotate} alt="rotate"/>
  </span>
);

export default Rotate;
