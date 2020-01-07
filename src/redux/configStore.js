import {
  createStore,
  applyMiddleware,
  combineReducers,
  Reducer,
  compose,
  Store,
  Action
} from "redux";
import ReduxThunk from "redux-thunk";
import stock from "./modules/stock";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ stock }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
