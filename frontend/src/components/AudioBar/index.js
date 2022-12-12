import React from 'react';
import Player from "./Bar.js";
import './Bar.css';

const AudioBar = ({ sessionUser }) => {
  if (sessionUser.sessionUser){
  return (
    <Player />
  ) 
}
}

export default AudioBar;