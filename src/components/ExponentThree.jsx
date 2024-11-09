import React from "react";

const ExponentThree = ({ value }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {value} * {value} * {value} = <span className="total">{Math.pow(value, 3)}</span>
    </p>
  </div>
);

export default ExponentThree;
