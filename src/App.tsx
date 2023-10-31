import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState<Array<undefined | boolean>>(
    Array.from({ length: 9 }),
  );

  //  If array[index] is undefined, then the square is empty
  //  If array[index] is true, then the square is X
  //  If array[index] is false, then the square is O

  return (
    <div className="board">
      {board.map((squareState, i) => {
        return <div key={i}>{squareState}</div>;
      })}
    </div>
  );
}

export default App;
