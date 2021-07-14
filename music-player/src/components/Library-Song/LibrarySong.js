import React from "react";
import { playAudio } from "../../utils";

import "./library-song.style.scss";

function LibrarySong({
   song,
   songs,
   setSongs,
   setCurrentSong,
   id,
   audioRef,
   isPlaying,
   currentSong,
}) {
   const songSelectHandler = () => {
      setCurrentSong(song);
      playAudio(isPlaying, audioRef);
   };

   return (
      <div
         onClick={songSelectHandler}
         className={`library-song ${
            song.id === currentSong.id ? "selected" : ""
         }`}
      >
         <img src={song.cover} alt="" />
         <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
         </div>
      </div>
   );
}

export default LibrarySong;
