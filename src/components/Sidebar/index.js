import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GeneralContext } from "../../contexts";
import { Link } from "react-router-dom";

export const Wrap = ({ children }) => {
  return (
    <div className="p-3">
      <ul>{children}</ul>
    </div>
  );
};

export const List = ({ title, icon, path }) => {
  const { activePage, setSidebarShownMobile } = React.useContext(
    GeneralContext.Context
  );
  return (
    <li>
      <Link
        to={path}
        className={`py-2 px-3 flex flex-row items-center justify-start mb-2 exo ${
          activePage == title
            ? "text-white-100 bg-dominant"
            : "text-black-400 hover:bg-white-200 hover:text-black-900"
        }`}
        onClick={() => {
          setSidebarShownMobile(false);
        }}
      >
        <span className="w-8">
          <FontAwesomeIcon icon={icon} />
        </span>
        <p className="font-bold">{title}</p>
      </Link>
    </li>
  );
};
