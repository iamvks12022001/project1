import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";

import { storeConfig } from "./store";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";

const store = storeConfig({ thunk, logger });

console.log("Store :", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
