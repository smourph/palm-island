import React from 'react';
import PropTypes from 'prop-types';
import CardNumber from '../molecules/card/CardNumber';
import './Card.scss';

export const Card = ({number, name, stock, victoryPoints, improvementsLevel, actions}) => (
  <div className='card'>
    <CardNumber number={number}/>
    {/*<CardStock stock={stock}/>
    <CardInfo
      name={name}
      victoryPoints={victoryPoints}
      improvementsLevel={improvementsLevel}/>
    <CardActions actions={actions}/>*/}
  </div>
);

Card.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.object.isRequired,
  victoryPoints: PropTypes.number.isRequired,
  improvementsLevel: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default Card;
