import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchAlbums } from "../../store/albums";
import AlbumList from "./AlbumList";
import "./AlbumIndexPage.css";
import { SongContext } from "../../App";

function AlbumIndexPage(sessionUser) {
  const searchInfo = useContext(SongContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const albumsAll = useSelector((state) => Object.values(state.albums) || []);
  const location = useLocation();
  // const [highlightedBench, setHighlightedBench] = useState(null);
  // const [bounds, setBounds] = useState(null);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch, location, searchInfo]);

  if (location.pathname !== "/search") {
    searchInfo.searchInfo[1]("");
  }


  // const gridContainer = document.querySelector(".grid-container") || "";
  // gridContainer.setAttribute("style", Math.floor((window.screen.width)/275));
 
  return (
    <div className="background-dark-theme">
      <div className="album-index-page">
        <div className="album-index-container">
          <section className="section-1-albums">
            <div className="section-1-title-div">
              <div className="section-1-title-div-inner">
                <div className="section-1-title-div-inner-inner">
                  {location.pathname === "/" && (
                    <h2 className="albums-index-title">Albums</h2>
                  )}
                  {location.pathname === "/search" && (
                    <h2 className="albums-index-title">Top Results</h2>
                  )}
                </div>
              </div>
            </div>
            {location.pathname === "/" && (
              <AlbumList sessionUser={sessionUser} albums={albumsAll} />
            )}
            {location.pathname === "/search" && (
              <AlbumList
                sessionUser={sessionUser}
                albums={albumsAll.filter((val) => {
                  if (searchInfo.searchInfo[0] === "") {
                    return val;
                  } else if (
                    val.albumName
                      .toLowerCase()
                      .includes(searchInfo.searchInfo[0].toLowerCase())
                  ) {
                    return val;
                  }
                })}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default AlbumIndexPage;
