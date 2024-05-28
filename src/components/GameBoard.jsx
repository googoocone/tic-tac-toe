import {useState} from 'react';



export default function GameBoard({board, onHandleGameTurn}) {
  console.log('board', board)

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onHandleGameTurn(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
