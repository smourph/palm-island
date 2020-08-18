import React from 'react';
import PropTypes from 'prop-types';
import ResourcePropTypes from '@internal/library/prop-types/ResourcePropTypes';
import './ResourceQuantity.scss';

export const ResourceQuantity = ({Resource, quantity}) => (
  <span className="resource-quantity">
    <React.Fragment>
      <span className="quantity">{quantity}</span>
      <Resource/>
    </React.Fragment>
  </span>
);

ResourceQuantity.propTypes = {
  Resource: ResourcePropTypes().isRequired,
  quantity: PropTypes.number.isRequired
};

export default ResourceQuantity;
