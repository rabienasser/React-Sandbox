import React from "react";
import "./App.css";
import { Switch, Route } from "react-router dom";

import HomePage from "./pages/homepage/homepage-component";

const HatsPage = () => {
   <div>
      <h1>HATS PAGE</h1>
   </div>;
};

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" compoonent={HomePage} />
            <Route exact path="/hats" compoonent={HatsPage} />
         </Switch>
      </div>
   );
}

export default App;
