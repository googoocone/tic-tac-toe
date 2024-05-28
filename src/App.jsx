import Head from "./components/Head";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Head></Head>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X"></Player>
            <Player name="Player 2" symbol="O"></Player>
          </ol>

          gameboard
        </div>
        log
      </main>
    </>
  );
}

export default App;
