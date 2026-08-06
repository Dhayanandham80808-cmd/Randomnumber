import { useState } from "react";
import "./style.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🎲 Random Number Generator</h1>

        <div className="number-box">
          {number === null ? "?" : number}
        </div>

        <button onClick={generateNumber}>
          Generate Number
        </button>

        <p>Range: 1 - 100</p>
      </div>
    </div>
  );
}

export default App;