import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFish} from '@fortawesome/free-solid-svg-icons';
import './Logo.scss';

export const Fish = () => (
  <span className="logo logo-resource logo-fish">
    <FontAwesomeIcon icon={faFish} rotation={270} fixedWidth/>
  </span>
);

export default Fish;
