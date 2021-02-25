import React from 'react';
import upgrade from '@internal/resources/images/logo-upgrade.png';
import './Logo.scss';

export const Upgrade = () => (
  <span className="logo logo-common logo-upgrade">
    <img src={upgrade} alt="upgrade"/>
  </span>
);

export default Upgrade;
