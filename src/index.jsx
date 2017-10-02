import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles/styles.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';


const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("react-app-root")
);
