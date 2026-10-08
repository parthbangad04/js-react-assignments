import { useState } from "react";
import "./Counter.css";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-page">

      <div className="counter-card">

        <span className="counter-badge">
          ASSIGNMENT 06
        </span>

        <h1>React Counter</h1>

        <p className="counter-description">
          A simple counter using React useState.
        </p>

        <div className="counter-display">
          {count}
        </div>

        <div className="counter-buttons">

          <button
            className="decrement-button"
            onClick={decrement}
          >
            −
          </button>

          <button
            className="increment-button"
            onClick={increment}
          >
            +
          </button>

        </div>

        <button
          className="reset-button"
          onClick={reset}
        >
          Reset Counter
        </button>

      </div>

    </div>
  );
}

export default Counter;