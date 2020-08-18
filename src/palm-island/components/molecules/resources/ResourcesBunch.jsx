import React from 'react';
import PropTypes from 'prop-types';
import LogoWood from '../../atoms/logos/Wood';
import LogoFish from '../../atoms/logos/Fish';
import LogoStone from '../../atoms/logos/Stone';
import ResourceStack from '../../atoms/resources/ResourceStack';

export const ResourcesBunch = ({wood, fish, stone}) => {
  if (wood === 0 && fish === 0 && stone === 0) {
    return null;
  }

  return (
    <span className="resources-bunch">
      {wood > 0 && <ResourceStack Resource={LogoWood} quantity={wood}/>}
      {fish > 0 && <ResourceStack Resource={LogoFish} quantity={fish}/>}
      {stone > 0 && <ResourceStack Resource={LogoStone} quantity={stone}/>}
    </span>
  );
};

ResourcesBunch.defaultProps = {
  wood: 0,
  fish: 0,
  stone: 0
};

ResourcesBunch.propTypes = {
  wood: PropTypes.number,
  fish: PropTypes.number,
  stone: PropTypes.number
};

export default ResourcesBunch;
