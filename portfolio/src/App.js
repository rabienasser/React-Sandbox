import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

// Router
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <Navbar />
         <Switch>
            <Route path="/" exact>
               <AboutUs />
            </Route>

            <Route path="/work">
               <OurWork />
            </Route>

            <Route path="/contact">
               <ContactUs />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
