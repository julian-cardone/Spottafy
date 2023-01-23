import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SongContext } from "../../App";
import { fetchArtist } from "../../store/artists";

const SongListItem = ({
  song,
  idx,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  album,
}) => {
  const { id, artistId, songTitle, albumId, songUrl } = song;

  const songInfo = useContext(SongContext);

  const audioElement = document.querySelector(".audio-audio");

  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artists.artist) || "";

  const [color, setColor] = useState("white");
  const path = document.getElementById("pathPlay");

  const playSongHandler = () => {
    dispatch(fetchArtist(album.artistId));
    audioElement.src = song.songUrl;
    songInfo.songInfo[1](songTitle);
    songInfo.songPic[1](album.photoUrl);
    songInfo.songInfo2[0].current.play()
    path.setAttribute("d", "M 2.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 H 2.7 Z m 8 0 a 0.7 0.7 0 0 0 -0.7 0.7 v 12.6 a 0.7 0.7 0 0 0 0.7 0.7 h 2.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -2.6 Z")
    songInfo.songPlaying[1](true)
    setColor("#1DB954");
  };


  return (
    <>
      <div className="song-row-container" onClick={playSongHandler}>
        <div className="song-row-outer">
          <div className="combined-flex">
            <div className="song-number-div">
              <div className="song-number-container"style={{color: color}}>{idx + 1}</div>
            </div>
            <div className="song-title-album-show-page">
              <div className="song-title-album-show-container">
                <div className="song-title-inner-text"style={{color: color}}>{songTitle}</div>
                <span className="song-artist-inner-text">
                  {artist.artistName}
                </span>
              </div>
            </div>
          </div>

          <div className="song-row-time-outer">
            <div className="time-container-album-show">2:00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongListItem;
