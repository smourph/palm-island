import React from 'react';
import star from '@internal/resources/images/logo-star.png';
import './Logo.scss';

export const Star = () => (
  <span className="logo logo-common logo-star">
    <img src={star} alt="star"/>
  </span>
);

export default Star;
