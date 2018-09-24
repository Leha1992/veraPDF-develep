import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./components/App.container";

import { rootReducer } from "./redux/modules";

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
