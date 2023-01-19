import { useContext, useEffect } from "react";
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

  const playSongHandler = () => {
    dispatch(fetchArtist(album.artistId));
    audioElement.src = song.songUrl;
    songInfo.songInfo[1](songTitle);
    songInfo.songPic[1](album.photoUrl);
    console.log(songInfo.songPic[0]);
  };

  return (
    <>
      <div className="song-row-container" onClick={playSongHandler}>
        <div className="song-row-outer">
          <div className="combined-flex">
            <div className="song-number-div">
              <div className="song-number-container">{idx + 1}</div>
            </div>
            <div className="song-title-album-show-page">
              <div className="song-title-album-show-container">
                <div className="song-title-inner-text">{songTitle}</div>
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
