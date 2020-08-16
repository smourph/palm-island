import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTree} from '@fortawesome/free-solid-svg-icons';
import './Logo.scss';

export const Wood = () => (
  <span className="logo logo-resource logo-wood">
    <FontAwesomeIcon icon={faTree} fixedWidth/>
  </span>
);

export default Wood;
