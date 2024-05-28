import { useState } from "react";

import Head from "./components/Head";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurn, setGameTurn] = useState("X");
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleGameTurn(rowIndex, colIndex) {
    console.log(gameTurn);
    if (gameTurn === "X") {
      setGameTurn("O");
    } else {
      setGameTurn("X");
    }

    setGameBoard((prevGameBoard) => {
      let updatedGameBoard = [...prevGameBoard];
      updatedGameBoard[rowIndex][colIndex] = gameTurn;
      
      return updatedGameBoard
    });
  }

  return (
    <>
      <Head></Head>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" gameTurn={gameTurn}></Player>
            <Player name="Player 2" symbol="O" gameTurn={gameTurn}></Player>
          </ol>

          <GameBoard
            board={gameBoard}
            onHandleGameTurn={handleGameTurn}
          ></GameBoard>
        </div>
        log
      </main>
    </>
  );
}

export default App;
