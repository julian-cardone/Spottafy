import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SongContext } from "../../App";
import PlayPauseButton from "./PlayPauseButton";
import SeekBar from "./SeekBar";
import VolumeButtons from "./Volume";

const Player = ({ audioElement, isPlaying, setIsPlaying, currentSong }) => {
  const songInfo = useContext(SongContext);

  const albumPic = useContext(SongContext);

  const artist = songInfo.artistInfo[0];

  return (
    <div className="root-audio-bar">
      <footer className="audio-footer">
        <div className="audio-bar-grid">
          <div className="now-playing">
            <div className="now-playing-widget">
              <div className="album-cover-bar">
                <img
                  src={albumPic.songPic[0]}
                  alt=""
                  className="quadrophenia"
                />
              </div>
              <div className="song-info-playbar">
                <div className="title-div-playbar">
                  <div className="title-div-playbar-pad">
                    <div className="title-padding-stuff">
                      <span className="title-name-span">
                        {songInfo.songInfo[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="artist-name-root-div">
                  <div className="artist-name-container-div">
                    <div className="artist-name-padding">
                      <div className="artist-name-wrapper">
                        <span className="artist-name">{artist}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="playbar-functionality-root">
            <div className="playbar-controls">
              <div className="playbar-controls-buttons">
                <div className="playbar-controls-buttons-left">
                  {/* <button className="back-song">
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                      <path d="M 3.3 1 a 0.7 0.7 0 0 1 0.7 0.7 v 5.15 l 9.95 -5.744 a 0.7 0.7 0 0 1 1.05 0.606 v 12.575 a 0.7 0.7 0 0 1 -1.05 0.607 L 4 9.149 V 14.3 a 0.7 0.7 0 0 1 -0.7 0.7 H 1.7 a 0.7 0.7 0 0 1 -0.7 -0.7 V 1.7 a 0.7 0.7 0 0 1 0.7 -0.7 h 1.6 Z"></path>
                    </svg>
                  </button> */}
                  <PlayPauseButton
                    audioElement={audioElement}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                  {/* <button className="back-song">
                    <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                      <path d="M 12.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 5.15 L 2.05 1.107 A 0.7 0.7 0 0 0 1 1.712 v 12.575 a 0.7 0.7 0 0 0 1.05 0.607 L 12 9.149 V 14.3 a 0.7 0.7 0 0 0 0.7 0.7 h 1.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -1.6 Z"></path>
                    </svg>
                  </button> */}
                </div>
              </div>
              <SeekBar currentSong={currentSong} audioElement={audioElement} />
            </div>
          </div>

          <div className="volume-mute-third">
            <div className="volume-mute-container">
              <div className="volume-bar">
                <VolumeButtons
                  audioElement={audioElement}
                  currentSong={currentSong}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Player;
