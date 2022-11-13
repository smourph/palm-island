import { Ctx, Game } from "boardgame.io";
import { INVALID_MOVE } from "boardgame.io/core";

export type PalmIslandState = {
  cells: (string | null)[];
}

export const clickCell = ({ G, ctx }: { G: PalmIslandState; ctx: Ctx }, id: number) => {
  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }

  G.cells[id] = ctx.currentPlayer;
};

export const PalmIsland: Game<PalmIslandState> = {
  name: "palm-island",

  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1
  },

  moves: {
    clickCell: (context: { G: PalmIslandState; ctx: Ctx }, id: number) => clickCell(context, id)
  },

  endIf: ({ G, ctx }) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },

  ai: {
    enumerate: (G) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    }
  }
};

// Return true if `cells` is in a winning configuration.
function IsVictory(cells: PalmIslandState["cells"]) {
  const positions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  return positions.map(row => {
    const symbols = row.map(i => cells[i]);
    return symbols.every(i => i !== null && i === symbols[0]);
  }).some(i => i);
}

// Return true if all `cells` are occupied.
function IsDraw(cells: PalmIslandState["cells"]) {
  return cells.filter(c => c === null).length === 0;
}
