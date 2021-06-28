// CREATING THE STORE FROM REDUX
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; //an array containing all possible middlewares we plan to use

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //Spread in the middlewares variable

export default store;
