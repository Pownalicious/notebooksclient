import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceworker from "./serviceworker";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/main.scss";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceworker.unregister();
