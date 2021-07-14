import React, { useState } from "react"; //UseReference
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faPause,
   faAngleLeft,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./player.style.scss";
import { playAudio } from "../../utils";

function Player({
   songs,
   currentSong,
   setCurrentSong,
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

   const skipTrackHandler = (direction) => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if (direction === "skip-forward") {
         setCurrentSong(songs[currentIndex + 1] || songs[0]);
      } else {
         setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]);
      }
      playAudio(isPlaying, audioRef);
   };

   // Add input style
   const trackAnim = {
      transform: `translateX(${songInfo.animationPercentage}%)`,
   };

   const trackColor = {
      background: `linear-gradient( to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
   };

   return (
      <div className="player">
         <div className="time-control">
            <p>{getTime(songInfo.currentTime)}</p>
            <div className="track" style={trackColor}>
               <input
                  min={0}
                  max={songInfo.duration || 0}
                  value={songInfo.currentTime}
                  type="range"
                  onChange={dragHandler}
               />
               <div className="animate-track" style={trackAnim}></div>
            </div>
            <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>{" "}
            {/* stops duration from saying NaN on initial render */}
         </div>
         <div className="play-control">
            <FontAwesomeIcon
               icon={faAngleLeft}
               size="2x"
               className="skip-back"
               onClick={() => skipTrackHandler("skip-back")}
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
               onClick={() => skipTrackHandler("skip-forward")}
            />
         </div>
      </div>
   );
}

export default Player;
