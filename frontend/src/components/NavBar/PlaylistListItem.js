import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPlaylist } from "../../store/playlist";

function PlaylistListItem(playlist){

  const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(fetchPlaylist(playlist.playlist.id))
  // },[dispatch, playlist])

  const playlistShow = () =>{
    history.push(`/playlist/${playlist.playlist.id}`)
  }
  
  return (
    <div onClick={playlistShow}className="playlist-list-item">{playlist.playlist.playlistName}</div>
  )
}

export default PlaylistListItem;