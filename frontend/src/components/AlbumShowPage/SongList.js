import SongListItem from "./SongListItem";

const SongList = ({ songs, album, isPlaying, setIsPlaying, currentSong, setCurrentSong }) => {

  const { albumName, year } = album;

  return (
    <>
      {songs.map((song, idx)=>(
        <SongListItem key={song.id}song={song}album={album}idx={idx}isPlaying={isPlaying}setIsPlaying={setIsPlaying}currentSong={currentSong}setCurrentSong={setCurrentSong}/>
      ))}
    </>
  )

}

export default SongList;