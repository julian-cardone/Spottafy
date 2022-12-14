import SongListItem from "./SongListItem";

const SongList = ({ songs, album }) => {

  const { albumName, year } = album;

  return (
    <>
      {songs.map((song, idx)=>(
        <SongListItem key={song.id}song={song}album={album}idx={idx}/>
      ))}
    </>
  )

}

export default SongList;