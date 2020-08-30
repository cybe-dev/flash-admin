import React from "react";
import { Link } from "react-router-dom";

const BodyHead = (props) => {
  return (
    <div className="py-3">
      <ul className="breadcrumb">
        {props.breadcrumb?.map((value, index) => (
          <li className="inline text-black-600" key={index}>
            {value.path ? (
              <Link to={value.path} className="hover:text-dominant">
                {value.name}
              </Link>
            ) : (
              value.name
            )}
          </li>
        ))}
      </ul>
      <h1 className="text-black-600 text-3xl font-bold mb-5">{props.title}</h1>
    </div>
  );
};

export default BodyHead;
