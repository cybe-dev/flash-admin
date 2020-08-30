import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faBars,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { GeneralContext, LanguageContext } from "../../contexts";
import {
  MainContainer,
  SidebarContainer,
  Sidebar,
  SiteHead,
  ContentContainer,
  BodyContainer,
  HeaderContainer,
  BodyHead,
} from "..";

const Layout = ({ children }) => {
  const {
    sidebarShownDesktop,
    setSidebarShownDesktop,
    sidebarShownMobile,
    setSidebarShownMobile,
    activePage,
    breadcrumb,
  } = React.useContext(GeneralContext.Context);
  const { dictionary } = React.useContext(LanguageContext.LanguageContext);
  return (
    <MainContainer>
      <SidebarContainer
        sidebarShownDesktop={sidebarShownDesktop}
        sidebarShownMobile={sidebarShownMobile}
      >
        <SiteHead>
          <p className="text-xl font-bold">TokoLoka</p>
        </SiteHead>
        <Sidebar.Wrap>
          <Sidebar.List title="Dashboard" icon={faHome} path="/" />
        </Sidebar.Wrap>
      </SidebarContainer>
      <ContentContainer
        sidebarShownDesktop={sidebarShownDesktop}
        sidebarShownMobile={sidebarShownMobile}
      >
        <HeaderContainer>
          <div className="flex flex-no-wrap mr-2 w-full">
            <button
              type="button"
              className="mr-3"
              onClick={() => {
                setSidebarShownDesktop((data) => !data);
                setSidebarShownMobile((data) => !data);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <input
              type="text"
              className="py-1 px-3 bg-white-100 border border-white-300 w-full lg:w-64"
              placeholder={dictionary.searchPlaceholder}
            />
          </div>
          <div className="text-black-400 flex items-center">
            <a href="#" className="p-2 hover:text-black-600 mr-1">
              <FontAwesomeIcon icon={faCog} />
            </a>
            <a href="#" className="p-2 hover:text-black-600 lg:mr-1">
              <FontAwesomeIcon icon={faBell} />
            </a>
            <img
              src="https://picsum.photos/200"
              className="w-8 h-8 rounded-full mx-3 hidden lg:block"
            />
          </div>
        </HeaderContainer>
        <BodyContainer>
          <BodyHead breadcrumb={breadcrumb} title={activePage} />
          {children}
        </BodyContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;
