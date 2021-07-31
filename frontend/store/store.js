import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const configureStore = (preloadedState) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;