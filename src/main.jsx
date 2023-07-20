import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset.js";
import { global } from "./styles/global.js";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <BrowserRouter>
      <Global styles={reset} />
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </React.Fragment>
);
