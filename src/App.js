import { useState } from "react";

export default function Board(props) {
  function Square() {
    function handleClick() {
      return setValue("X");
    }

    const [value, setValue] = useState(null);
    return (
      <button onClick={handleClick} className="square">
        {value}
      </button>
    );
  }

  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
