import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
function SearchBar() {

  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const albums = useSelector(state => state.albums)

  return (
    <>
      <div className="search-bar-container">
        <form role="search">
          <input className="search-input"placeholder="What do you want to listen to?"maxLength="800"onChange={(e)=>setValue(e.target.value)}></input>
          <div className="div-inside-input">
            <span className="span-inside-input">
              <svg role="img"height="24"width="24"viewBox="0 0 24 24">
                <path d="M 10.533 1.279 c -5.18 0 -9.407 4.14 -9.407 9.279 s 4.226 9.279 9.407 9.279 c 2.234 0 4.29 -0.77 5.907 -2.058 l 4.353 4.353 a 1 1 0 1 0 1.414 -1.414 l -4.344 -4.344 a 9.157 9.157 0 0 0 2.077 -5.816 c 0 -5.14 -4.226 -9.28 -9.407 -9.28 Z m -7.407 9.279 c 0 -4.006 3.302 -7.28 7.407 -7.28 s 7.407 3.274 7.407 7.28 s -3.302 7.279 -7.407 7.279 s -7.407 -3.273 -7.407 -7.28 Z"></path>
              </svg>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
