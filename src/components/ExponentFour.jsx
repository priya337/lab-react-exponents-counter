import React from "react";

const ExponentFour = ({ value }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {value} * {value} * {value} * {value} = <span className="total">{Math.pow(value, 4)}</span>
    </p>
  </div>
);

export default ExponentFour;
