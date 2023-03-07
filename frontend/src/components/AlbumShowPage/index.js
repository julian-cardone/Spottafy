import React, { useContext, useEffect, useState } from "react";
import SongList from "./SongList";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/albums";
import "./AlbumShow.css";
import { fetchArtist } from "../../store/artists";
import { SongContext } from "../../App";
// import AlbumList from "./AlbumList";

const AlbumShowPage = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioElement,
}) => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album || "");
  const songs = useSelector((state) => Object.values(state.albums.songs || {}));
  const artist = useSelector((state) => state.artists.artist) || "";
  const location = useLocation();
  const searchInfo = useContext(SongContext);

  if (location.pathname !== "/search") {
    searchInfo.searchInfo[1]("");
  }

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  useEffect(() => {
    dispatch(fetchArtist(album.artistId));
  }, [dispatch, album]);
  
  return (
    //album, title, artist, etc.... in the header
    //return the buttons
    //#title, border underneath
    <div className="main-content-container">
      <div className="background-theme-album">
        <section className="album-show-section">
          <div className="background-theme-album-show"></div>
          <div className="header-content-album-show">
            <div className="album-photo-container">
              <div className="album-photo-container-inner">
                <img
                  className="album-image-show-page"
                  src={album.photoUrl}
                  alt="albumm"
                ></img>
              </div>
            </div>
            <div className="album-info-show-page-container">
              <h2 className="album-title-show-page">ALBUM</h2>
              <span className="span-album-title-show">
                <h1 className="span-inner-title-show">{album.albumName}</h1>
              </span>
              <div className="more-info-album-show">
                <div className="artist-info-album-show">
                  <span className="artist-name-album-show">
                    {artist.artistName}
                  </span>
                </div>
                <span className="year-info-album-show">{album.year}</span>
                <span className="album-info-time">
                  {songs.length} songs&nbsp;
                  <span className="album-info-time-length"></span>
                </span>
              </div>
            </div>
          </div>
          <div className="gradient-fade-show"></div>
          <div className="songs-container">
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
              <div className="songs-container-album-show">
                <SongList
                  songs={songs}
                  album={album}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  audioElement={audioElement}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlbumShowPage;
