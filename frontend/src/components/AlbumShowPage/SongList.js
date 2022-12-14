import SongListItem from "./SongListItem";

const SongList = ({ songs, album }) => {

  const { albumName, year } = album;

  return (
    <>
      {songs.map((song)=>(
        <SongListItem key={song.id}song={song}album={album}/>
      ))}
    </>
  )

}

export default SongList;