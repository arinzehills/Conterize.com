import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
// window.baseUrl = "http://127.0.0.1:8000/api/";
window.baseUrl = "https://conterize-api.herokuapp.com/api/";

const history = createBrowserHistory();
wrapHistory(history);
ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
