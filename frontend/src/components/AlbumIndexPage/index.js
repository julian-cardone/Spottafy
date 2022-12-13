import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";
import AlbumList from "./AlbumList";
import './AlbumIndexPage.css';

function AlbumIndexPage() {
  const history = useHistory(); 
  const dispatch = useDispatch();
  const albums = useSelector(state => Object.values(state.albums));
  // const [highlightedBench, setHighlightedBench] = useState(null);
  // const [bounds, setBounds] = useState(null);

  useEffect(() => {
      dispatch(fetchAlbums());
    }, [dispatch]);

  return (
    <div className="album-index-page">
      <div className="album-index-container">
          TEST
      </div>
  </div>
  );
}

export default AlbumIndexPage;