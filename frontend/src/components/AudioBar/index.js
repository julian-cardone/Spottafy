import React, { useEffect, useRef } from 'react';
import Player from "./Bar.js";
import './Bar.css';
import { useState } from "react";
import { songsdata } from "./songsdata";

const AudioBar = ({ sessionUser }) => {

  const [songs, setSongs] = useState(songsdata);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0])

  // const audioElement = <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"type="audio/mpeg"name="audio"></audio>
  // console.log(audioElement);
  // audioElement.play();
  const audioElement = useRef();

  const onPlay = () => {
    const duration = audioElement.current.duration;
    const ct = audioElement.current.currentTime;
    const volume = audioElement.current.volume;

    setCurrentSong({...currentSong, "progress":ct / duration * 100, "length": duration, "volume":volume})
  }
  
  if (sessionUser.sessionUser){
  return (
    <>
    <audio ref={audioElement}onTimeUpdate={onPlay}></audio>
    <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentSong={currentSong}/>
    </>
  ) 
}
}

export default AudioBar;