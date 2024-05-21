import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactIconsSampler from "./Labs/Lab2/ReactIconSampler";
import ScreenSizeLabel from "./Labs/Lab2/ScreenSizeLabel";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <ReactIconsSampler />
    <ScreenSizeLabel />
  </React.StrictMode>
);



