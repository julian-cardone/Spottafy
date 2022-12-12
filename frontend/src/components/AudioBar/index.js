import React, { useRef } from 'react';
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
  
  if (sessionUser.sessionUser){
  return (
    <>
    <audio ref={audioElement}></audio>
    <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement}/>
    </>
  ) 
}
}

export default AudioBar;