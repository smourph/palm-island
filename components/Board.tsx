import React, { useMemo } from 'react';
import { Properties } from 'csstype';
import { BoardProps } from "boardgame.io/react";
import { PalmIslandState } from "../module/game/PalmIsland";
import { range } from "../utils";

interface PalmIslandProps extends BoardProps<PalmIslandState> {
}

export const Board: React.FunctionComponent<PalmIslandProps> = ({ G, ctx, moves }) => {
  const winner = useMemo(() => {
    if (ctx.gameover) {
      return ctx.gameover.winner !== undefined ?
        <div id="winner">Winner: {ctx.gameover.winner}</div> :
        <div id="winner">Draw!</div>;
    }
  }, [ctx.gameover]);

  const cellStyle: Properties<string | number> = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center'
  };

  const onClick: (id: number) => void = id => moves.clickCell(id);

  const tbody = [];
  for (let i = 0; i < 3; i++) {
    const cells = range(3).map((j) =>
      <td
        key={j}
        style={cellStyle}
        onClick={() => onClick(i * 3 + j)}
      >
        {(G.cells as PalmIslandState["cells"])[i * 3 + j]}
      </td>);
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}
    </div>
  );
};
