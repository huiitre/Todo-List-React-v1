import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from './middleware/api';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware()),
);

export default store;
