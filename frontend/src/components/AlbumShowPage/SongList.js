import SongListItem from "./SongListItem";

const SongList = ({ songs }) => {

  return (
    <>
    {songs.map((song)=>(
      <SongListItem key={song.id}song={song}/>
    ))}
    </>
  )

}

export default SongList;