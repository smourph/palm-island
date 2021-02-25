import React from 'react';
import PropTypes from 'prop-types';
import Card from './organisms/Card';
import {aCard} from '@internal/library/fixtures';

export const Board = ({G, ctx, events, moves}) => {
  return (
    <div className="board">
      <Card {...aCard()}/>
    </div>
  );
};

Board.propTypes = {
  G: PropTypes.object.isRequired,
  ctx: PropTypes.object.isRequired,
  moves: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired
};

export default Board;
