import { combineReducers, createStore, applyMiddleware } from "redux";
import moviesReducer from "./movies-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    movies: moviesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store