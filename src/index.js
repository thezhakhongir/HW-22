import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/rootReducer/store";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById("root")
);
