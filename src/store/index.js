import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

import appReducer from "./reducer";

const reducer = combineReducers({
  appReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
