import React from "react";

import "./library-song.style.scss";

function LibrarySong({ song }) {
   return (
      <div className="library-song">
         <img src={song.cover} alt="" />
         <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
         </div>
      </div>
   );
}

export default LibrarySong;
