import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylist, updatePlaylist } from "../../store/playlist";

function PlaylistInput({ playlist, setRender }) {
  const dispatch = useDispatch();

  // const playlist = useSelector(state=> state.playlist.one)
  // useEffect(()=>{
    //   dispatch(fetchPlaylist(playlistId))
    
    setRender("anything");
    const [value, setValue] = useState(playlist);
    // console.log(value);
    
  // },[dispatch, playlistId])

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
