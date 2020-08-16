import React from 'react';
import PropTypes from 'prop-types';
import Wood from '../../atoms/logos/Wood';
import Fish from '../../atoms/logos/Fish';
import Stone from '../../atoms/logos/Stone';
import './Resources.scss';

export const Resources = ({wood, fish, stone, showQuantityNumber}) => {
  if (wood === 0 && fish === 0 && stone === 0) {
    return showQuantityNumber ?
      (<span className="resources">Gratuit</span>) :
      null;
  }

  const renderResourcesBunch = (Logo, quantity) => {
    return (
      <span className="resources-bunch">
        {[...Array(quantity)].map((n, i) => <Logo key={i}/>)}
      </span>
    );
  };

  const renderResourcesWithQuantity = (Logo, quantity) => {
    return (
      <span className="resources-quantity">
        <React.Fragment>
          <span className="quantity">{quantity}</span>
          <Logo/>
        </React.Fragment>
      </span>
    );
  };

  return (
    <span className="resources">
      {wood > 0 ?
        showQuantityNumber ? renderResourcesWithQuantity(Wood, wood) : renderResourcesBunch(Wood, wood) :
        null
      }

      {fish > 0 ?
        showQuantityNumber ? renderResourcesWithQuantity(Fish, fish) : renderResourcesBunch(Fish, fish) :
        null
      }

      {stone > 0 ?
        showQuantityNumber ? renderResourcesWithQuantity(Stone, stone) : renderResourcesBunch(Stone, stone) :
        null
      }
    </span>
  );
};

Resources.defaultProps = {
  wood: 0,
  fish: 0,
  stone: 0,
  showQuantityNumber: false
};

Resources.propTypes = {
  wood: PropTypes.number,
  fish: PropTypes.number,
  stone: PropTypes.number,
  showQuantityNumber: PropTypes.bool
};

export default Resources;
