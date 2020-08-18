import React from 'react';
import PropTypes from 'prop-types';

export const Board = ({G, ctx, events, moves}) => {
  return (
    <div className="board"/>
  );
};

Board.propTypes = {
  G: PropTypes.object.isRequired,
  ctx: PropTypes.object.isRequired,
  moves: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired
};

export default Board;
