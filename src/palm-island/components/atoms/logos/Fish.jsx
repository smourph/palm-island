import React from 'react';
import fish from '@internal/resources/images/logo-fish.png';
import './Logo.scss';

export const Fish = () => (
  <span className="logo logo-resource logo-fish">
    <img src={fish} alt="fish"/>
  </span>
);

export default Fish;
