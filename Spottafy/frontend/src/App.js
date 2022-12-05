import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
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