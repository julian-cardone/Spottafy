import PlaylistListItem from "./PlaylistListItem";

function PlaylistList({ playlists }) {
  // console.log(playlists);
  return (
    <ul>
      {Object.values(playlists).map((playlist) => {
        return (
          <li>
            <PlaylistListItem playlist={playlist} />
          </li>
        )
      })}
    </ul>
  );
}

export default PlaylistList;
