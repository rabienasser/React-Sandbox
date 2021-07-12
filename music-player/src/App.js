import React, { useState, useEffect } from "react";

import Song from "./components/Song/Song.component";
import Player from "./components/Player/Player.component";
// Import Utils
import data from "./utils";

import "./app.scss";

function App() {
   // State
   const [songs, setSongs] = useState(data());
   const [currentSong, setCurrentSong] = useState(songs[5]);
   const [isPlaying, setIsPlaying] = useState(false);

   return (
      <div className="App">
         <Song currentSong={currentSong} />
         <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
         />
      </div>
   );
}

export default App;
