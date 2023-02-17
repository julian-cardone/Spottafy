import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchPlaylist, updatePlaylist } from "../../store/playlist";
import "./newPlaylist.css";
import PlaylistInput from "./PlaylistInput";

function NewPlaylist() {
  const { playlistId } = useParams();
  // const dispatch = useDispatch();

  const [value, setValue] = useState({});

  useEffect(() => {
    csrfFetch(`/api/playlists/${playlistId}`)
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, [playlistId]);

  // useLayoutEffect(() => {
  //   dispatch(fetchPlaylist(playlistId));
  // }, [dispatch, playlistId]);

  // const changeValue = (e) => {
  //   setValue({...value, playlistName: e.target.value});
  //   dispatch(updatePlaylist(value));
  // };

  return (
    <div className="main-content-container">
      <div className="background-theme-album-2">
        <section className="album-show-section">
          <div className="background-theme-album-show"></div>
          <div className="header-content-album-show-2">
            <div className="album-photo-container">
              <div className="album-photo-container-inner">
                {/* <img className="album-image-show-page" alt="albumm"></img> */}
                <div className="playlist-img">
                  <div className="playlist-img-svg-div">
                    <svg role="img" height="55" width="55" viewBox="0 0 24 24">
                      <path d="M 6 3 h 15 v 15.167 a 3.5 3.5 0 1 1 -3.5 -3.5 H 19 V 5 H 8 v 13.167 a 3.5 3.5 0 1 1 -3.5 -3.5 H 6 V 3 Z m 0 13.667 H 4.5 a 1.5 1.5 0 1 0 1.5 1.5 v -1.5 Z m 13 0 h -1.5 a 1.5 1.5 0 1 0 1.5 1.5 v -1.5 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="album-info-show-page-container">
              <h2 className="album-title-show-page-2">PLAYLIST</h2>
              <span className="span-album-title-show">
                <PlaylistInput value={ value } setValue={setValue} />
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
