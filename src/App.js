import React from 'react';
import {Client} from 'boardgame.io/react';
import Game from './palm-island/Game';
import Board from './palm-island/components/Board';

const AppGame = Client({
  game: Game,
  board: Board,
  numPlayers: 1,
  debug: false
});

function App() {
  return (
    <React.Fragment>
      <h1>Palm Island</h1>
      <div role="main" className="app">
        <AppGame gameID="palm-island" playerID="0"/>
      </div>
    </React.Fragment>
  );
}

export default App;
