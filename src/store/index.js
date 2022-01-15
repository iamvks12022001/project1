import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers";

export function storeConfig(props) {
  console.log("props", props);
  const { thunk, logger } = props;
  const store = createStore(combineReducers, applyMiddleware(thunk, logger));
  return store;
}
