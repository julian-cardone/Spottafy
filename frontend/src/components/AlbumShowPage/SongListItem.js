import { useContext } from "react";
import { SongContext } from "../../App";

const SongListItem = ({
  song,
  idx,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
}) => {
  const { id, artistId, songTitle, albumId, songUrl } = song;

  const songInfo = useContext(SongContext);

  const audioElement = document.querySelector(".audio-audio");

  // console.log(songInfo.songInfo)

  const playSongHandler = () => {
    audioElement.src = song.songUrl;
    songInfo.songInfo[1](songTitle);
    console.log(songInfo.songInfo[0]);
  };

  return (
    <>
      <div className="song-row-container" onClick={playSongHandler}>
        <div className="song-row-outer">
          <div className="combined-flex">
            <div className="song-number-div">
              <div className="song-number-container">
                {idx + 1}
                {/* <span className="song-number-album-show">1</span> */}
              </div>
            </div>
            <div className="song-title-album-show-page">
              <div className="song-title-album-show-container">
                <div className="song-title-inner-text">{songTitle}</div>
                <span className="song-artist-inner-text">Artist Name</span>
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
