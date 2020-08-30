import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white-100 border border-white-300 p-3">{children}</div>
  );
};

export default Card;
