import React from "react";

const ExponentSix = ({ value }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {value} * {value} * {value} * {value} * {value} * {value} = <span className="total">{Math.pow(value, 6)}</span>
    </p>
  </div>
);

export default ExponentSix;
