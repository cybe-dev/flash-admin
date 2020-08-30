import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className="bg-gray min-h-screen w-full overflow-x-hidden flex flex-row justify-between">
      {children}
    </div>
  );
};

export default MainContainer;
