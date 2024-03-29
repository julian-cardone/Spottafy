import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";
import { FastAverageColor } from "fast-average-color";
import { SongContext } from "../../App";
import { useSelector } from "react-redux";

function AlbumListItem({ album, sessionUser }) {
  // const history = useHistory();

  const history = useHistory();

  const { id, albumName, artistId, year } = album;

  const [artistName, setArtistName] = useState("");

  // const songPict = useContext(SongContext);
  console.log(artistId)

  useEffect(() => {
    csrfFetch(`/api/artists/${artistId}`)
      .then((res) => res.json())
      .then((data) => setArtistName(data.artistName));
  }, [artistId]);

  const clickHandler = (e) => {
    if (sessionUser.sessionUser.sessionUser) {
      history.push(`/album/${id}`);
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="album-container" onClick={(e) => clickHandler(e)}>
      <div className="gradient-div"></div>
      <div className="album-outer">
        <div className="album-cover">
          <div className="album-cover-inner">
            <img
              className="album-image"
              src={album.photoUrl}
              alt="album-cover"
            ></img>
          </div>
        </div>
        <div className="song-info">
          {/* <a className="album-title-link"href="/"> */}
          <div className="title-album-index">{albumName}</div>
          {/* </a> */}
          <div className="artist-name-index-page">{artistName}</div>
        </div>
      </div>
    </div>
  );
}

export default AlbumListItem;
