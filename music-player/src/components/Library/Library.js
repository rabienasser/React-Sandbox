import React from "react";
import LibrarySong from "../Library-Song/LibrarySong";

import "./library.style.scss";

function Library({ songs }) {
   return (
      <div className="library">
         <h2>Library</h2>
         <div className="library-songs">
            {songs.map((song) => (
               <LibrarySong song={song} />
            ))}
         </div>
      </div>
   );
}

export default Library;
