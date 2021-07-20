import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import Components
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
// Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
// CSS
import "./App.css";

function App() {
   const location = useLocation();

   return (
      <div className="App">
         <GlobalStyle />
         <ScrollTop />
         <Navbar />
         <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
               <Route path="/" exact>
                  <AboutUs />
               </Route>

               <Route path="/work" exact>
                  <OurWork />
               </Route>
               <Route path="/work/:id">
                  {/* The ':id' means you can add anything after /work and it will take you to MovieDetail page */}
                  <MovieDetail />
               </Route>

               <Route path="/contact">
                  <ContactUs />
               </Route>
            </Switch>
         </AnimatePresence>
      </div>
   );
}

export default App;
