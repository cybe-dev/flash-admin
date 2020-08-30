import React from "react";

const HeaderContainer = ({ children }) => {
  return (
    <div className="h-12 border-b border-white-400 flex items-center px-3 lg:px-8 justify-between">
      {children}
    </div>
  );
};
export default HeaderContainer;
