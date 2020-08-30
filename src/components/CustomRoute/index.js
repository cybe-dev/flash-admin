import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts";
import Layout from "../Layout";

export const Auth = ({ children, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return <Route {...rest}>{auth ? <Redirect to="/" /> : children}</Route>;
};
export const Private = ({ children, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Route {...rest}>
      {!auth ? <Redirect to="/login" /> : <Layout>{children}</Layout>}
    </Route>
  );
};
