import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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
import { useRef } from "react";
import { songsdata } from "./components/AudioBar/songsdata.js";
import SearchPage from "./components/SearchPage/index.js";
import { useEffect } from "react";
import NewPlaylist from "./components/NewPlaylist/index.js";

export const SongContext = createContext(null);

function App() {
  const location = useLocation();

  // section 1 start
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElement = useRef();

  const onPlay = () => {
    const duration = audioElement.current.duration;
    const ct = audioElement.current.currentTime;
    const volume = audioElement.current.volume;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
      volume: volume,
      ct: ct,
    });
  };

  // section 1 end

  const [songCurr, setSongCurr] = useState(null);
  const [songPict, setSongPict] = useState(null);
  const [artist, setArtist] = useState("");
  const [search, setSearch] = useState("");

  const sessionUser = useSelector((state) => state.session.user);

  // window.scroll(function() {
  //   let scrollTop = document.scrollTop();
  
  //   document.querySelector('.header-overlay').css({
  //     opacity: function() {
  //       let elementHeight = document.querySelector('.header-overlay').height();
  //       return 1 - (elementHeight - scrollTop) / elementHeight;
  //     }
  //   });
  // });

  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignupFormPage sessionUser={sessionUser} />
        </Route>
        <Route path="/login">
          <LoginFormPage sessionUser={sessionUser} />
        </Route>
        <SongContext.Provider
          value={{
            songInfo: [songCurr, setSongCurr],
            songPic: [songPict, setSongPict],
            songPlaying: [isPlaying, setIsPlaying],
            songInfo2: [audioElement, currentSong],
            artistInfo: [artist, setArtist],
            searchInfo: [search, setSearch],
          }}
        >
          <audio
            ref={audioElement}
            onTimeUpdate={onPlay}
            className="audio-audio"
          ></audio>
          <Route exact path="/">
            <NavBar sessionUser={sessionUser} />
            <SessionLinks sessionUser={{ sessionUser }} />
            <AlbumIndexPage sessionUser={{ sessionUser }} />
          </Route>
          <Route exact path="/album/:albumId">
            <NavBar sessionUser={sessionUser} />
            <AlbumShowPage />
            <SessionLinks sessionUser={{ sessionUser }} />
          </Route>
          <Route exact path="/search">
            <NavBar sessionUser={sessionUser} />
            <SessionLinks sessionUser={{ sessionUser }} />
            <SearchPage />
          </Route>
          <Route exact path="/playlist/:playlistId">
            <NavBar sessionUser={sessionUser} />
            <SessionLinks sessionUser={{ sessionUser }} />
            <NewPlaylist />
          </Route>
          <AudioBar sessionUser={{ sessionUser }} />
        </SongContext.Provider>
      </Switch>
    </>
  );
}

export default App;
