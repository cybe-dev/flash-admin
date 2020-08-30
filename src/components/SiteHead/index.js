import React from "react";

const SiteHead = ({ children }) => {
  return (
    <div className="h-12 border-b border-white-400 flex items-center justify-center">
      {children}
    </div>
  );
};

export default SiteHead;
