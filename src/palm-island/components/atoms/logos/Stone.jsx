import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGem} from '@fortawesome/free-solid-svg-icons';
import './Logo.scss';

export const Stone = () => (
  <span className="logo logo-resource logo-stone">
    <FontAwesomeIcon icon={faGem} fixedWidth/>
  </span>
);

export default Stone;
