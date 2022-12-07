import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import SessionLinks from "./components/SessionLinksHeader";

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/">
          <SessionLinks />
        </Route>
      </Switch>
    </>
  );
}

export default App;