import React, { useEffect, useState } from "react";
import SongList from "./SongList";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/albums";
import "./AlbumShow.css";
import { fetchArtist } from "../../store/artists";
// import AlbumList from "./AlbumList";

const AlbumShowPage = ({ isPlaying, setIsPlaying, currentSong, setCurrentSong, audioElement }) => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album || "");
  const songs = useSelector((state) => Object.values(state.albums.songs || {}));
  const artist = useSelector(state => state.artists.artist) || "";

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
                  <span className="artist-name-album-show">{artist.artistName}</span>
                </div>
                <span className="year-info-album-show">{album.year}</span>
                <span className="album-info-time">
                  {songs.length} songs,&nbsp;
                  <span className="album-info-time-length">song-time</span>
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
                  {/* <div className="title-word-show"> */}
                  {/* <div className="title-word-show-container"> */}
                  <span className="title-word-show-word">TITLE</span>
                  {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="songs-container-album-show">
                <SongList songs={songs} album={album} isPlaying={isPlaying}setIsPlaying={setIsPlaying}currentSong={currentSong}setCurrentSong={setCurrentSong}audioElement={audioElement}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlbumShowPage;
