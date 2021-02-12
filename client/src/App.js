import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UserContext from "./utils/UserContext";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import ProfilePage from "./pages/ProfilePage";
import PasswordReset from "./pages/PasswordReset";

function Application() {
  const user = useContext(UserContext);

  return (
        user ?
        <ProfilePage />
      :
      <Router>
        <Switch>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/passwordReset">
            <PasswordReset />
          </Route>
        </Switch>
      </Router>
  );
}



export default Application;