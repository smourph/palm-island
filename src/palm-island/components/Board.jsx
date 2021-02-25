import React from 'react';
import PropTypes from 'prop-types';
import Action from './molecules/action/Action';
import {ACTION} from '@internal/library/constants';
import {aBunchOfResources, anAction} from '@internal/library/fixtures';

export const Board = ({G, ctx, events, moves}) => {
  return (
    <div className="board">
      <Action {...anAction()}/><br/>
      <Action {...anAction(ACTION.ROTATE, [aBunchOfResources(3, 2, 4)])}/><br/>
      <Action {...anAction(ACTION.FLIP, [
        aBunchOfResources(1, 2, 3),
        aBunchOfResources(3, 2, 1),
        aBunchOfResources(2, 0, 2)
      ])}/>
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
