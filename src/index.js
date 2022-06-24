import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.bootstrap.css";
import "./index.css";
import "./assets/fonts/Zuume/Zuume-SemiBoldItalic.ttf";
import GlobalProvider from "./context/reducers/provider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
