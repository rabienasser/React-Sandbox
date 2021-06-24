import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux"; //creating store from redux
import allReducers from "./reducers/index"; //import the combined reducer from index.js

import { Provider } from "react-redux"; //Connects global state (store) to our entire application

const store = createStore(
   allReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE -> GLOBALIZED STATE

// // ACTION -> INCREMENT (A FUNCTION THAT RETURNS AN OBJECT)
// const increment = () => {
//    return {
//       type: "INCREMENT",
//    };
// };
// const decrement = () => {
//    return {
//       type: "DECREMENT",
//    };
// };

// // REDUCER (CHECKS WHICH ACTION TAKES PLACE AND MODIFIES THE STORE ACCORDINGLY)
// const counter = (state = 0, action) => {
//    // eslint-disable-next-line default-case
//    switch (
//       action.type //Check which action is taking place
//    ) {
//       case "INCREMENT":
//          return state + 1;

//       case "DECREMENT":
//          return state - 1;
//    }
// };

// let store = createStore(counter); //add reducer to the store

// // Display in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH (ACTUALLY DISPATCH THE PARTICULAR ACTION TO THE REDUCER)
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
