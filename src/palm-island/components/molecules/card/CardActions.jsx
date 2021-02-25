import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';
import './CardActions.scss';

export const CardActions = ({actions}) => (
  <div className="card-actions">
    {Object.keys(actions).map((id, i) => (
      <Action
        key={i}
        id={id}
        costs={(actions)[id].costs}
      />
    ))}
  </div>
);

CardActions.propTypes = {
  actions: PropTypes.object.isRequired
};

export default CardActions;
