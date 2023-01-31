function PlaylistListItem(playlist){

  // console.log(playlist)
  
  return (
    <div className="playlist-list-item">{playlist.playlist.playlistName}</div>
  )
}

export default PlaylistListItem;