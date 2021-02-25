import React from 'react';
import PropTypes from 'prop-types';
import {RESOURCE} from '../../constants';
import Resources from './Resources';

export const CardStock = ({stock}) => (
  <div className="card-stock">
    <Resources
      wood={(stock)[RESOURCE.WOOD.id]}
      fish={(stock)[RESOURCE.FISH.id]}
      stone={(stock)[RESOURCE.STONE.id]}
      showQuantityNumber={false}
    />
  </div>
);

CardStock.propTypes = {
  stock: PropTypes.object.isRequired
};

export default CardStock;
