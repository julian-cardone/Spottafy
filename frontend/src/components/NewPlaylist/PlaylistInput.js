import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlaylist } from "../../store/playlist";

function PlaylistInput({ playlist, value, setValue }) {
  const dispatch = useDispatch();

  // console.log(playlist, value, setValue);

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
