import React from "react";

const Alert = ({ children, className, style, theme }) => {
  const color = theme ? theme : "primary";
  return (
    <div
      className={`bg-${color}-stroke py-1 px-3 ${className && className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Alert;
