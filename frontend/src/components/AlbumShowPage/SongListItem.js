const SongListItem = ({ song, idx }) => {

  const { id, artistId, songTitle, albumId } = song;

  return (
    <>
    <div className="song-row-container">
      <div className="song-row-outer">
        <div className="song-number-div">
          <div className="song-number-container">{idx+1}
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
    </div>
    </>
  )
  
}

export default SongListItem;