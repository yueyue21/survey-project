import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

// reducer
import App from "./components/App";
import reducers from "./reducers";

const store = createStore(() => [], {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
// two comments,1 is route component, 2 is where we are attempting
// to render that component to inside of our DOM
