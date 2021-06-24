import counterReducer from "./counter";
import loggedReducer from "./islogged";
// COMBINE REDUCERS
import { combineReducers } from "redux";

const allReducers = combineReducers({
   counterReducer, //ES6, counterReducer: counterReducer
   loggedReducer,
});

export default allReducers;
