import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Reducer,
  Store,
  Action
} from "redux";
import ReduxThunk from "redux-thunk";
import stock from "./modules/stock";
import menu from "./modules/menu";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ stock, menu }),
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
