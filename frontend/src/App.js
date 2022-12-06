import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import SessionLinks from "./components/SessionLinksHeader";

function App() {
  return (
    <>
    <SessionLinks />
      <Switch>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/">
          {/* <BenchIndexPage /> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;