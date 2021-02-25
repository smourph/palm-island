import React from 'react';
import PropTypes from 'prop-types';
import ResourcesPropTypes from '@internal/library/prop-types/ResourcesPropTypes';
import {ACTION} from '@internal/library/constants';
import ResourcesCost from '../resources/ResourcesCost';
import Store from '../../atoms/logos/Store';
import Rotate from '../../atoms/logos/Rotate';
import Flip from '../../atoms/logos/Flip';
import './Action.scss';

export const Action = ({type, costOptions}) => {
  const renderActionLogo = type => {
    switch (type) {
      case ACTION.STORE:
        return <Store/>;
      case ACTION.ROTATE:
        return <Rotate/>;
      case ACTION.FLIP:
        return <Flip/>;
      default:
        return;
    }
  };

  return (
    <span className="action">
      {renderActionLogo(type)}
      <span className="action-separator">:</span>

      {costOptions.map((cost, i) =>
        <ResourcesCost
          key={i}
          wood={cost.wood}
          fish={cost.fish}
          stone={cost.stone}
        />
      ).reduce((prev, curr, currIndex) =>
        [prev, <span key={'resources-separator-' + currIndex - 1} className="resources-separator">/</span>, curr]
      )}
    </span>
  );
};

Action.propTypes = {
  type: PropTypes.string.isRequired,
  costOptions: PropTypes.arrayOf(ResourcesPropTypes).isRequired
};

export default Action;
