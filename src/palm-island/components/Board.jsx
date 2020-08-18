import React from 'react';
import PropTypes from 'prop-types';
import ResourcesBunch from './molecules/resources/ResourcesBunch';
import ResourcesCost from './molecules/resources/ResourcesCost';
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
      <ResourcesBunch {...anEmptyBunchOfResources()}/><br/>
      <ResourcesBunch {...aBunchOfWoods(1)}/><br/>
      <ResourcesBunch {...aBunchOfFishes(2)}/><br/>
      <ResourcesBunch {...aBunchOfStones(3)}/><br/>
      <ResourcesBunch {...aBunchOfResources(1, 1, 1)}/><br/>
      <ResourcesBunch {...aBunchOfResources(2, 3, 4)}/><br/>
      <ResourcesBunch {...aBunchOfResources(4, 0, 2)}/><br/>
      <br/>
      <ResourcesCost {...anEmptyBunchOfResources()}/><br/>
      <ResourcesCost {...aBunchOfWoods(1)}/><br/>
      <ResourcesCost {...aBunchOfFishes(2)}/><br/>
      <ResourcesCost {...aBunchOfStones(3)}/><br/>
      <ResourcesCost {...aBunchOfResources(1, 1, 1)}/><br/>
      <ResourcesCost {...aBunchOfResources(2, 3, 4)}/><br/>
      <ResourcesCost {...aBunchOfResources(4, 0, 2)}/><br/>
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
