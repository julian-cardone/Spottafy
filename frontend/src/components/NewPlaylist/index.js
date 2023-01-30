import "./newPlaylist.css";

function NewPlaylist() {

  return (
    <div className="main-content-container">
      <div className="background-theme-album-2">
        <section className="album-show-section">
          <div className="background-theme-album-show"></div>
          <div className="header-content-album-show-2">
            <div className="album-photo-container">
              <div className="album-photo-container-inner">
                <img className="album-image-show-page" alt="albumm"></img>
              </div>
            </div>
            <div className="album-info-show-page-container">
              <h2 className="album-title-show-page-2">PLAYLIST</h2>
              <span className="span-album-title-show">
              <input className="span-inner-title-show-2"placeholder="placeholder"></input>
              </span>
              <div className="more-info-album-show">
                <div className="artist-info-album-show">
                  <span className="artist-name-album-show">Username</span>
                </div>
                {/* <span className="year-info-album-show-2"></span> */}
                {/* <span className="album-info-time">Username
                <span className="album-info-time-length"></span>
              </span> */}
              </div>
            </div>
          </div>
          {/* <div className="gradient-fade-show-2"></div> */}
          {/* <div className="songs-container">
            <div className="songs-grid-album-show">
              <div className="title-title-album-show">
                <div className="title-title-container">
                  <div className="hashtag-album-show">#</div>
                  <span className="title-word-show-word">TITLE</span>
                </div>
                <div className="clock-symbol">
                  <svg role="img" height="16" width="16" viewBox="0 0 16 16">
                    <path d="M 8 1.5 a 6.5 6.5 0 1 0 0 13 a 6.5 6.5 0 0 0 0 -13 Z M 0 8 a 8 8 0 1 1 16 0 A 8 8 0 0 1 0 8 Z"></path>
                    <path d="M 8 3.25 a 0.75 0.75 0 0 1 0.75 0.75 v 3.25 H 11 a 0.75 0.75 0 0 1 0 1.5 H 7.25 V 4 A 0.75 0.75 0 0 1 8 3.25 Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default NewPlaylist;
