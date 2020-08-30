import React from "react";
import { GeneralContext } from "../../contexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ id, title, children }) => {
  const { modal, setModal } = React.useContext(GeneralContext.Context);
  return (
    <div
      className={`${
        modal === id ? "visible opacity-100" : "invisible opacity-0"
      } fixed overflow-y-auto h-screen w-full top-0 left-0 bg-black-900 bg-opacity-75 z-50 transition-all duration-300`}
    >
      <div
        className={`absolute top-0 left-0 right-0 my-8 mx-8 lg:mx-auto bg-white-100 lg:w-2/5 z-50 shadow-lg`}
      >
        <div className="border-b border-white-300 flex my-3 mx-5 pb-3 items-center">
          <h4 className="roboto font-bold text-xl text-black-600 w-full">
            {title}
          </h4>
          <button
            type="button"
            className="py-1 px-2"
            onClick={() => setModal(null)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="px-5 py-3 mb-3">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
