import React, { useEffect, useRef } from 'react';
import Player from "./Bar.js";
import './bar.css';
import { useState } from "react";
import { songsdata } from "./songsdata";
import { useSelector } from 'react-redux';

const AudioBar = ({ sessionUser }) => {

  // const audioElement = <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"type="audio/mpeg"name="audio"></audio>
  // console.log(audioElement);
  // audioElement.play();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);

  const audioElement = useRef();

  // console.log(audioElement);

  //   useEffect(()=>{
  //   audioElement.current.src="https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3";
  // },[audioElement])

  const onPlay = () => {
    const duration = audioElement.current.duration;
    const ct = audioElement.current.currentTime;
    const volume = audioElement.current.volume;

    console.log(audioElement);

    setCurrentSong({...currentSong, "progress":ct / duration * 100, "length": duration, "volume":volume, "ct":ct})
  }
  
  if (sessionUser.sessionUser){
  return (
    <>
    <audio ref={audioElement}onTimeUpdate={onPlay}className="audio-audio"></audio>
    <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentSong={currentSong}/>
    </>
  ) 
}
}

export default AudioBar;