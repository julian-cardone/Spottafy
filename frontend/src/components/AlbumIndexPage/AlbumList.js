import React from "react";
import AlbumListItem from "./AlbumListItem";

const AlbumList = ({ albums, sessionUser}) => {

  return (
    <div className="grid-container">
      {albums.map((album) => (
        <>
          <AlbumListItem sessionUser={sessionUser}key={album.id} album={album} />
          {/* <AlbumListItem key={album.id}album={album}/> */}
        </>
      ))}
    </div>
  );
};

export default AlbumList;
