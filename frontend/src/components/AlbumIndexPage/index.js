import React, { useEffect } from "react";
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
    
    // console.log(window.screen.width);
    // console.log(gridContainer);
    // const gridContainer = document.querySelector(".grid-container") || "";
    // gridContainer.setAttribute("style", Math.floor((window.screen.width)/275));

  return (
  <div className='background-dark-theme'>
    <div className="album-index-page">
      <div className="album-index-container">
        <section className="section-1-albums">
          <div className="section-1-title-div">
            <div className="section-1-title-div-inner">
              <div className="section-1-title-div-inner-inner">
                <h2 className="albums-index-title">Albums</h2>
              </div> 
            </div>
          </div>
                  <AlbumList albums={albums}/>
        </section>
                <section className="section-1-albums">
          <div className="section-1-title-div">
            <div className="section-1-title-div-inner">
              <div className="section-1-title-div-inner-inner">
                {/* <h2 className="albums-index-title">Albums</h2> */}
              </div> 
            </div>
          </div>
                  {/* <AlbumList albums={albums}/> */}
        </section>
      </div>
    </div>
  </div> 
  );
}

export default AlbumIndexPage;