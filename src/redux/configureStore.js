import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import weatherReducer from './weather/weatherReducer';

const reducer = combineReducers({
  weatherReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
