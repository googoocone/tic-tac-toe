import { useState, useEffect } from "react";

import Head from "./components/Head";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function isWinning(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    const [
      { row: row1, column: col1 },
      { row: row2, column: col2 },
      { row: row3, column: col3 },
    ] = combination;

    if (
      gameBoard[row1][col1] !== null &&
      gameBoard[row1][col1] === gameBoard[row2][col2] &&
      gameBoard[row1][col1] === gameBoard[row3][col3]
    ) {
      return true;
    }
  }
  return false;
}

function App() {
  const [gameTurn, setGameTurn] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (isWinning(gameBoard)) {
      setShowModal(true);
      setWinner(gameTurn === "X" ? "O" : "X"); // Set winner to the previous player
    }
  }, [gameBoard]);

  function handleGameTurn(rowIndex, colIndex) {
    if (gameBoard[rowIndex][colIndex] !== null || showModal) {
      return;
    }

    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = prevGameBoard.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (rIndex === rowIndex && cIndex === colIndex) {
            return gameTurn;
          }
          return cell;
        })
      );
      return updatedGameBoard;
    });

    setGameTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
  }

  function closeModal() {
    setShowModal(false);
    setGameBoard(initialGameBoard);
    setGameTurn("X");
  }

  return (
    <>
      <Head />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" gameTurn={gameTurn} />
            <Player name="Player 2" symbol="O" gameTurn={gameTurn} />
          </ol>

          <GameBoard board={gameBoard} onHandleGameTurn={handleGameTurn} />
        </div>
        {showModal && (
          <div id="modal-overlay" style={{ display: "block" }}>
            <div id="modal-content">
              <h2>We have a winner!</h2>
              <p>Congratulations, {winner}!</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
