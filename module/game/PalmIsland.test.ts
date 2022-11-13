import { expect, it } from '@jest/globals';
import { Ctx } from 'boardgame.io';
import { Client } from 'boardgame.io/client';
import { clickCell, PalmIsland, PalmIslandState } from './PalmIsland';

describe('Unit Tests', () => {
  it('should place the correct value in the cell', () => {
    // Given
    const G: PalmIslandState = {
      cells: [null, null, null, null, null, null, null, null, null]
    };
    const ctx: Ctx = {
      activePlayers: null,
      numPlayers: 0,
      phase: '',
      playOrder: [],
      playOrderPos: 0,
      turn: 0,
      currentPlayer: '3'
    };

    // When
    clickCell({ G, ctx }, 3);

    // Then
    expect(G).toEqual({
      cells: [null, null, null, '3', null, null, null, null, null]
    });
  });
});

describe('Scenario Tests', () => {
  it('should declare player 1 as the winner', () => {
    // set up a specific board scenario
    const PalmIslandCustomScenario = {
      ...PalmIsland,
      setup: () => ({
        cells: ['0', '0', null, '1', '1', null, null, null, null]
      })
    };

    // initialize the client with your custom scenario
    const client = Client({
      game: PalmIslandCustomScenario
    });

    // make some game moves
    client.moves.clickCell(8);
    client.moves.clickCell(5);

    // the board should look like this now
    expect(client.getState()?.G.cells).toEqual(['0', '0', null, '1', '1', '1', null, null, '0']);
    // player '1' should be declared the winner
    expect(client.getState()?.ctx.gameover).toEqual({ winner: '1' });
  });
});
