import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, updatePlaylist } from "../../store/playlist";

function PlaylistInput({ value, setValue }) {
  const dispatch = useDispatch();

  // const [title, setTitle] = useState(value);
  // console.log(title)

  const changeName = (e) => {
    setValue(e.target.value);
    dispatch(updatePlaylist({playlist: {playistName: value}}));
  };

  return (
    <input
      className="span-inner-title-show-2"
      value={value}
      onChange={changeName}
    ></input>
  );
}

export default PlaylistInput;
