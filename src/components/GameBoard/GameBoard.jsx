import React, { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setgameBoard] = useState(initialBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    setgameBoard((prevRowGameBoard) => {
      const updatedBoard = [
        ...prevRowGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  }
  return (
    <>
      <div>GameBoard</div>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerIndex, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  >
                    {playerIndex}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

export default GameBoard;
