import React from "react";
import AlbumListItem from "./AlbumListItem";


const AlbumList = ({ albums }) => {
  return (
    <div className="grid-container">
      {albums.map((album)=>(
        <>  
            <AlbumListItem key={album.id}album={album}/>
        </>
      ))}

    </div>

    
  )
}

export default AlbumList;