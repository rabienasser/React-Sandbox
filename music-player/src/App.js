import React, { useState, useEffect } from "react";

import Song from "./components/Song/Song.component";
import Player from "./components/Player/Player.component";
// Import Utils
import data from "./utils";

import "./app.scss";

function App() {
   // State
   const [songs, setSongs] = useState(data());

   return (
      <div className="App">
         <Song />
         <Player />
      </div>
   );
}

export default App;
