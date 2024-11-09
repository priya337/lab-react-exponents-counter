import React from "react";

const Counter = ({ counterValue, increment, decrement }) => {
  return (
    <div className="counter-container">
      {/* Display the current counter value */}
      <p className="counter-value">{counterValue}</p>
      
      {/* Use the passed increment and decrement functions for buttons */}
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
