import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";
import { storeConfig } from "./store";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
//to get store from store file
const store = storeConfig({ thunk, logger });

//adding one {just for check}
store.dispatch({ type: "ADD" });
console.log("Store :", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
