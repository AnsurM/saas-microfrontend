import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/signin" component={SignIn} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
