import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const SidebarContainer = ({
  children,
  sidebarShownDesktop,
  sidebarShownMobile,
}) => {
  return (
    <div
      className={`fixed bg-white-100 h-screen overflow-x-hidden transition-all duration-500 border-white-400 ${
        sidebarShownMobile ? "w-sidebar-lg border-r shadow-lg" : "w-0"
      } ${
        sidebarShownDesktop
          ? "lg:w-sidebar-sm lg:border-r lg:shadow-lg"
          : "lg:w-0 lg:border-r-0 lg:shadow-none"
      }`}
    >
      <PerfectScrollbar>{children}</PerfectScrollbar>
    </div>
  );
};

export default SidebarContainer;
