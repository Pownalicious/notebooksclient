// src/store/index.js
import { combineReducers, createStore } from "redux";
import notesReducer from "./notes/reducer";

const allReducers = [notesReducer];

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(combineReducers(allReducers), enhancer);
export default store;
