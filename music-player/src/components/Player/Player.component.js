import React, { useRef } from "react"; //UseReference
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleLeft,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./player.style.scss";

function Player({ currentSong }) {
   // Event Handlers
   const playSongHandler = () => {};

   return (
      <div className="player">
         <div className="time-control">
            <p>Start Time</p>
            <input type="range" />
            <p>End Time</p>
         </div>
         <div className="play-control">
            <FontAwesomeIcon
               icon={faAngleLeft}
               size="2x"
               className="skip-back"
            />
            <FontAwesomeIcon
               onClick={playSongHandler}
               icon={faPlay}
               size="2x"
               className="play"
            />
            <FontAwesomeIcon
               icon={faAngleRight}
               size="2x"
               className="skip-forward"
            />
         </div>
         <audio src={currentSong.audio}></audio>
      </div>
   );
}

export default Player;
