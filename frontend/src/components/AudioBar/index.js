import React, { useContext, useEffect, useRef } from "react";
import Player from "./Bar.js";
import "./bar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { SongContext } from "../../App.js";
import PlayerTwo from "./PlayerTwo.js";

const AudioBar = ({ sessionUser }) => {
  const songContext = useContext(SongContext);

  if (sessionUser.sessionUser) {
    return (
      <>
        <Player
          isPlaying={songContext.songPlaying[0]}
          setIsPlaying={songContext.songPlaying[1]}
          audioElement={songContext.songInfo2[0]}
          currentSong={songContext.songInfo2[1]}
        />
      </>
    );
  } else {
    return <PlayerTwo />;
  }
};

export default AudioBar;
