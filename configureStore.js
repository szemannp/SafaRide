import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import generalReducer from './common/GeneralComponent/reducer';

const rootReducer = combineReducers({
  // Reducers come here
  generalReducer
});


const logger = createLogger();
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
  let store = createStore(
    rootReducer,
    Immutable.Map({}),
    composeEnhancers(applyMiddleware(thunk, logger))
  );

  return store;
}
