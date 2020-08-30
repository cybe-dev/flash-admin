import React from "react";

export const Context = React.createContext();

const GeneralContext = (props) => {
  const [sidebarShownDesktop, setSidebarShownDesktop] = React.useState(true);
  const [sidebarShownMobile, setSidebarShownMobile] = React.useState(false);
  const [activePage, setActivePage] = React.useState("Dashboard");
  const [modal, setModal] = React.useState(null);
  const [breadcrumb, setBreadcrumb] = React.useState([
    {
      path: "/",
      name: "Home",
    },
    {
      name: "Dashboard",
    },
  ]);

  React.useEffect(() => {
    if (modal) {
      document.body.style.position = "sticky";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = null;
      document.body.style.overflow = null;
    }
  }, [modal]);

  return (
    <Context.Provider
      value={{
        sidebarShownDesktop,
        setSidebarShownDesktop,
        sidebarShownMobile,
        setSidebarShownMobile,
        activePage,
        setActivePage,
        breadcrumb,
        setBreadcrumb,
        modal,
        setModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GeneralContext;
