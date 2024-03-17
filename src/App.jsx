import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";
import Log from "./components/Log/Log";

//now to share the state between two componenets we have the functionalirty to lift the state up, where we pass the state to diferent components as props
function App() {
  const [activePlayer, setactivePlayer] = useState("X");
  function handleSelectSquare() {
    setactivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              name="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
        <div>
          <Log />
        </div>
      </main>
    </>
  );
}

export default App;
