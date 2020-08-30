import React from "react";

const ContentContainer = ({
  children,
  sidebarShownDesktop,
  sidebarShownMobile,
}) => {
  return (
    <div
      className={`transition-all duration-500 w-full ${
        sidebarShownMobile ? "content-lg" : "ml-0"
      } ${sidebarShownDesktop ? "lg:content-sm" : "lg:ml-0"}`}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
