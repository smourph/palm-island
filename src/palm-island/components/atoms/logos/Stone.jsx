import React from 'react';
import stone from '@internal/resources/images/logo-stone-small.png';
import './Logo.scss';

export const Stone = () => (
  <span className="logo logo-resource logo-stone">
    <img src={stone} alt="stone"/>
  </span>
);

export default Stone;
