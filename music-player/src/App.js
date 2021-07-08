import React from "react";

import Song from "./components/Song/Song.component";
import Player from "./components/Player/Player.component";

import "./app.scss";

function App() {
   return (
      <div className="App">
         <Song />
         <Player />
      </div>
   );
}

export default App;
