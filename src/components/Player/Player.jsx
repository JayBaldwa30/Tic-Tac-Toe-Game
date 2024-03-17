import React from "react";
import { useState } from "react";

function Player({ namee, symbol, isActive }) {
  const [isEditing, setisEditing] = useState(false);
  const [name, setName] = useState("Player");
  function handleInputChange(e) {
    setName(e.target.value);
  }
  function handleEdit() {
    setisEditing((editing) => !editing);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <form>
              <input value={name} onChange={handleInputChange}></input>
            </form>
          ) : (
            name
          )}
        </span>
        <spam className="player-symbol">{symbol}</spam>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
