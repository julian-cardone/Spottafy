import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, updatePlaylist } from "../../store/playlist";

function PlaylistInput({ value, setValue }) {
  const dispatch = useDispatch();

  const changeName = (e) => {
    setValue({ ...value, playlistName: e.target.value });
    dispatch(updatePlaylist(value));
  };

  return (
    <input
      className="span-inner-title-show-2"
      value={value.playlistName}
      onChange={changeName}
    ></input>
  );
}

export default PlaylistInput;
