

const SongListItem = ({ song, idx, isPlaying, setIsPlaying, currentSong, setCurrentSong, audioElement }) => {
  const { id, artistId, songTitle, albumId, songUrl } = song;

  const playSongHandler = () =>{
    audioElement.current.src = song.songUrl;
  }

  return (
    <>
      <div className="song-row-container"onClick={playSongHandler}>
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
              <div className="song-title-inner-text">{song.songTitle}</div>
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
