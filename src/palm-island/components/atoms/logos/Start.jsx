import React from 'react';
import start from '@internal/resources/images/logo-start-white.png';
import './Logo.scss';

export const Start = () => (
  <span className="logo logo-common logo-start">
    <img src={start} alt="start"/>
  </span>
);

export default Start;
