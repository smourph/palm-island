import React from 'react';
import PropTypes from 'prop-types';

export const CardInfo = ({name, victoryPoints, improvementsLevel}) => (
  <div className="card-info">
    <h1>{victoryPoints} {name} {improvementsLevel}</h1>
  </div>
);

CardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  victoryPoints: PropTypes.number.isRequired,
  improvementsLevel: PropTypes.number.isRequired
};

export default CardInfo;
