import React from "react";

const ExponentTwo = ({ value }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {value} * {value} = <span className="total">{Math.pow(value, 2)}</span>
    </p>
  </div>
);

export default ExponentTwo;
