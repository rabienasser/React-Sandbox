import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Pages
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <AboutUs />
      </div>
   );
}

export default App;
