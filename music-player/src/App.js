import React, { useState, useEffect, useRef } from "react";

import Song from "./components/Song/Song.component";
import Player from "./components/Player/Player.component";
import Library from "./components/Library/Library";
// Import Utils
import data from "./utils";

import "./app.scss";

function App() {
   // Ref
   const audioRef = useRef(null);
   // State
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[0]);
   const [isPlaying, setIsPlaying] = useState(false);
   const [songInfo, setSongInfo] = useState({
      currentTime: 0,
      duration: 0,
   });
   const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;

      setSongInfo({
         ...songInfo,
         currentTime,
         duration,
      });
   };

   return (
      <div className="App">
         <Song currentSong={currentSong} />
         <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            timeUpdateHandler={timeUpdateHandler}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
         />
         <Library
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            currentSong={currentSong}
         />
         <audio
            onLoadedMetadata={timeUpdateHandler} //when page laods, song duration renders (don't need to press play button to see it)
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
         ></audio>
      </div>
   );
}

export default App;
