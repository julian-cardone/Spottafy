import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, updatePlaylist } from "../../store/playlist";

function PlaylistInput({ value, setValue, newVal, setNewVal }) {
  const dispatch = useDispatch();

  console.log(newVal);
  
  const changeName = (e) => {
    setNewVal(e.target.value);
    setTimeout(dispatch(updatePlaylist({ ...value, playlistName: newVal})), 500);
  };

  return (
    <input
      className="span-inner-title-show-2"
      value={newVal}
      onChange={changeName}
    ></input>
  );
}

export default PlaylistInput;
