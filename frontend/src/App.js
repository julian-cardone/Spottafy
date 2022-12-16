import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage/index.js";
import SessionLinks from "./components/SessionLinksHeader";
import LoginFormPage from "./components/LoginFormPage";
import { useSelector } from "react-redux";
import AudioBar from "./components/AudioBar";
import NavBar from "./components/NavBar";
import AlbumIndexPage from "./components/AlbumIndexPage/index.js";
import AlbumShowPage from "./components/AlbumShowPage/index.js";
import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext(null);

function App() {

  const [songCurr, setSongCurr] = useState(null);

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage sessionUser={sessionUser} />
        </Route>
        <Route path="/login">
          <LoginFormPage sessionUser={sessionUser} />
        </Route>0
    <SongContext.Provider value={{songInfo: [songCurr, setSongCurr]}}>
        <Route exact path="/">
          <NavBar sessionUser={sessionUser}/>
          <SessionLinks sessionUser={{ sessionUser }} />
          <AlbumIndexPage />
          <AudioBar sessionUser={{ sessionUser }} />
        </Route>
        <Route exact path="/album/:albumId">
          <NavBar sessionUser={sessionUser}/>
          <AlbumShowPage />
          <SessionLinks sessionUser={{ sessionUser }} />
          <AudioBar sessionUser={{ sessionUser }} />
        </Route>
    </SongContext.Provider>
      </Switch>
    </>
  );
}

export default App;
