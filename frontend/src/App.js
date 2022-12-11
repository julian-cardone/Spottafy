import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import SessionLinks from "./components/SessionLinksHeader";
import LoginFormPage from "./components/LoginFormPage";
import { useSelector } from "react-redux";
import AudioBar from "./components/AudioBar";

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser);

  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage sessionUser={sessionUser} />
        </Route>
        <Route path="/login">
          <LoginFormPage sessionUser={sessionUser} />
        </Route>
        <Route exact path="/">
          <SessionLinks sessionUser={{ sessionUser }} />
          <AudioBar />
        </Route>
      </Switch>
    </>
  );
}

export default App;
