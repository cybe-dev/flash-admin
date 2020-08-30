import React from "react";
import "./css/App.css";
import { GeneralContext, AuthContext, LanguageContext } from "./contexts";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Dashboard, Login } from "./pages";
import { CustomRoute } from "./components";

const App = () => {
  const [auth, setAuth] = React.useState(null);

  React.useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <LanguageContext.Wrap>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <GeneralContext.default>
          <Router>
            <Switch>
              <CustomRoute.Auth path="/login">
                <Login />
              </CustomRoute.Auth>
              <CustomRoute.Private path="/" exact={true}>
                <Dashboard />
              </CustomRoute.Private>
            </Switch>
          </Router>
        </GeneralContext.default>
      </AuthContext.Provider>
    </LanguageContext.Wrap>
  );
};

export default App;
