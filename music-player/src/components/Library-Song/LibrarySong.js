import React from "react";

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

      // Check if song is playing
      if (isPlaying) {
         const playPromise = audioRef.current.play();
         if (playPromise !== undefined) {
            playPromise.then((audio) => {
               audioRef.current.play();
            });
         }
      }
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
