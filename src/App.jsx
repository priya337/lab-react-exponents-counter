import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./Exponent";

function App() {
  // State to manage the counter value
  const [counterValue, setCounterValue] = useState(0);

  // Increment and Decrement functions are here
  const increment = () => {
    setCounterValue((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCounterValue((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      {/* Pass counter value, increment, and decrement functions to Counter */}
      <Counter
        counterValue={counterValue}
        increment={increment}
        decrement={decrement}
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/* Use the Exponent component for different exponent values */}
        <Exponent num={counterValue} exponent={2} />
        <Exponent num={counterValue} exponent={3} />
        <Exponent num={counterValue} exponent={4} />
        <Exponent num={counterValue} exponent={5} />
        <Exponent num={counterValue} exponent={6} />
      </div>
    </div>
  );
}

export default App;
