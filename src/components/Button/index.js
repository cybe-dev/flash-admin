import React from "react";

const Button = ({ theme, children, type, onClick, className }) => {
  const backgroundColor = theme ? "bg-" + theme + "-front" : null;
  const textColor =
    backgroundColor === "warning" ? "text-black-900" : "text-white-100";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-1 px-2 rounded-none ${backgroundColor} ${textColor} ${
        className && className
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
