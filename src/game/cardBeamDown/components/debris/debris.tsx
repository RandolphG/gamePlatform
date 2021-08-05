import React from "react";

const Debris = () => (
  <div className="debris">
    {[0, 1, 2, 3, 4, 5].map((item, idx) => (
      <div key={`item-${idx}`}>
        <div />
      </div>
    ))}
  </div>
);

export default Debris;
