import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment } from "./actions/index";

function App() {
   const counter = useSelector((state) => state.counterReducer);
   const isLogged = useSelector((state) => state.loggedReducer);
   const dispatch = useDispatch();

   return (
      <div className="App">
         <h1>Counter {counter}</h1>
         <button onClick={() => dispatch(increment)}>+</button>
         <button>-</button>

         {isLogged ? <h3>Valuable information</h3> : ""}
      </div>
   );
}

export default App;
