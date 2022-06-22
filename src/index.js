import React from "react";
import ReactDom from "react-dom";
import { StrictMode } from "react";

import App from "./App";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
