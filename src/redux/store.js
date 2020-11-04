import logger from 'redux-logger';

import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root-reducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));