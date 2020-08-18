import React from 'react';
import PropTypes from 'prop-types';
import Wood from '../../atoms/logos/Wood';
import Fish from '../../atoms/logos/Fish';
import Stone from '../../atoms/logos/Stone';
import ResourceQuantity from '../../atoms/resources/ResourceQuantity';

export const ResourcesCost = ({wood, fish, stone}) => {
  if (wood === 0 && fish === 0 && stone === 0) {
    return (
      <span className="resources-cost">Gratuit</span>
    );
  }

  return (
    <span className="resources-cost">
      {wood > 0 && <ResourceQuantity Resource={Wood} quantity={wood}/>}
      {fish > 0 && <ResourceQuantity Resource={Fish} quantity={fish}/>}
      {stone > 0 && <ResourceQuantity Resource={Stone} quantity={stone}/>}
    </span>
  );
};

ResourcesCost.defaultProps = {
  wood: 0,
  fish: 0,
  stone: 0
};

ResourcesCost.propTypes = {
  wood: PropTypes.number,
  fish: PropTypes.number,
  stone: PropTypes.number
};

export default ResourcesCost;
