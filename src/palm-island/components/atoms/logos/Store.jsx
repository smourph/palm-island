import React from 'react';
import store from '@internal/resources/images/logo-store.png';
import './Logo.scss';

export const Store = () => (
  <span className="logo logo-action logo-store">
      <img src={store} alt="store"/>
  </span>
);

export default Store;
