import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faPlay,
   faAngleLeft,
   faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./player.style.scss";

function Player() {
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
            <FontAwesomeIcon icon={faPlay} size="2x" className="play" />
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
