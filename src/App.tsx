import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array.from({ length: 9 }));

  //  If array[index] is undefined, then the square is empty
  //  If array[index] is true, then the square is X
  //  If array[index] is false, then the square is O

  return (
    <div className="board">
      {board.map((_, i) => (
        <div>{i}</div>
      ))}
    </div>
  );
}

export default App;
