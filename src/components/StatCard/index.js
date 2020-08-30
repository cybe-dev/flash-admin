import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatCard = (props) => {
  const color = props.theme ? props.theme : "primary";
  return (
    <div
      className={`bg-white-100 p-3 border border-white-300 flex items-center justify-between ${
        props.className && props.className
      }`}
      style={props.style}
    >
      <div>
        <span className="text-black-400 exo">{props.title}</span>
        <span className="text-black-600 exo block font-bold text-xl">
          {props.children}
        </span>
      </div>
      <div
        className={`w-12 h-12 rounded-full bg-${color}-back flex items-center justify-center text-2xl border border-${color}-stroke text-${color}-front`}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </div>
  );
};

export default StatCard;
