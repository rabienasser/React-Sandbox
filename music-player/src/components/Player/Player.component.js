import React, { useState } from "react"; //UseReference
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faPause,
   faAngleLeft,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./player.style.scss";

function Player({
   currentSong,
   isPlaying,
   setIsPlaying,
   audioRef,
   timeUpdateHandler,
   songInfo,
   setSongInfo,
}) {
   // Event Handlers
   const playSongHandler = () => {
      setIsPlaying(!isPlaying);

      if (isPlaying) {
         audioRef.current.pause();
      } else {
         audioRef.current.play();
      }
   };

   const getTime = (time) => {
      return (
         Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
   };

   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;

      setSongInfo({
         ...songInfo,
         currentTime: e.target.value,
      });
   };

   return (
      <div className="player">
         <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input
               min={0}
               max={songInfo.duration}
               value={songInfo.currentTime}
               type="range"
               onChange={dragHandler}
            />
            <p>{getTime(songInfo.duration)}</p>
         </div>
         <div className="play-control">
            <FontAwesomeIcon
               icon={faAngleLeft}
               size="2x"
               className="skip-back"
            />
            <FontAwesomeIcon
               onClick={playSongHandler}
               icon={isPlaying ? faPause : faPlay}
               size="2x"
               className="play"
            />
            <FontAwesomeIcon
               icon={faAngleRight}
               size="2x"
               className="skip-forward"
            />
         </div>
      </div>
   );
}

export default Player;
