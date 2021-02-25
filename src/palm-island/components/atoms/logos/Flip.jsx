import React from 'react';
import flip from '@internal/resources/images/logo-flip.png';
import './Logo.scss';

export const Flip = () => (
  <span className="logo logo-action logo-flip">
      <img src={flip} alt="flip"/>
  </span>
);

export default Flip;
