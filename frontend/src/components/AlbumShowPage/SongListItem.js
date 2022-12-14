const SongListItem = ({ song }) => {

  const { id, artistId, songTitle, albumId } = song;

  return (
    <>
    <p>{song.songTitle}</p>
    </>
  )
  
}

export default SongListItem;