import React from 'react';
import PropTypes from 'prop-types';
import ResourcePropTypes from '@internal/library/prop-types/ResourcePropTypes';
import './ResourceStack.scss';

export const ResourceStack = ({Resource, quantity}) => (
  <span className="resource-stack">
    {[...Array(quantity)].map((n, i) => <Resource key={i}/>)}
  </span>
);

ResourceStack.propTypes = {
  Resource: ResourcePropTypes().isRequired,
  quantity: PropTypes.number.isRequired
};

export default ResourceStack;
