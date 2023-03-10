import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../rootReducer/root.reducer';
import logger from 'redux-logger';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
