import React from 'react';
import PropTypes from 'prop-types';
import Start from '../../atoms/logos/Start';
import './CardNumber.scss';

export const CardNumber = ({number}) => (
  <div className="card-number">
    <Start/>
    <span className="number">{number}</span>
  </div>
);

CardNumber.propTypes = {
  number: PropTypes.number.isRequired
};

export default CardNumber;
