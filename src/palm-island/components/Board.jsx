import React from 'react';
import PropTypes from 'prop-types';
import Resources from './molecules/resources/Resources';
import {
  aBunchOfFishes,
  aBunchOfResources,
  aBunchOfStones,
  aBunchOfWoods,
  anEmptyBunchOfResources
} from '@internal/library/fixtures';

export const Board = ({G, ctx, events, moves}) => {
  return (
    <div className="board">
      <Resources {...anEmptyBunchOfResources()}/><br/>
      <Resources {...aBunchOfWoods(2)}/><br/>
      <Resources {...aBunchOfFishes(2)}/><br/>
      <Resources {...aBunchOfStones(2)}/><br/>
      <Resources {...aBunchOfResources(1, 1, 1)}/><br/>
      <Resources {...aBunchOfResources(2, 3, 4)}/><br/>
      <Resources {...aBunchOfResources(4, 0, 2)}/><br/>
      <br/>
      <Resources {...anEmptyBunchOfResources()} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfWoods(2)} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfFishes(2)} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfStones(2)} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfResources(1, 1, 1)} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfResources(2, 3, 4)} showQuantityNumber={true}/><br/>
      <Resources {...aBunchOfResources(4, 0, 2)} showQuantityNumber={true}/><br/>
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
