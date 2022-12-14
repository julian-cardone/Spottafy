import React, { useEffect, useState } from "react";
import SongList from "./SongList";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAlbum } from "../../store/albums";
import "./AlbumShow.css";
// import AlbumList from "./AlbumList";

const AlbumShowPage = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album || "");
  const songs = useSelector((state) => Object.values(state.albums.songs || {}));
  // const songs = Object.values(albumInfo.songs);
  // console.log(Object.values(albumInfo));

  useEffect(() => {
    dispatch(fetchAlbum(albumId));
  }, [dispatch, albumId]);

  return (
    //album, title, artist, etc.... in the header
    //return the buttons
    //#title, border underneath
    <div className="main-content-container">
      <SongList songs={songs}album={album}/>
    </div>
  )
};

export default AlbumShowPage;
