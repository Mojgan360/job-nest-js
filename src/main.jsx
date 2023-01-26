import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import { ThemeProvider } from "styled-components";
import App from "./App";

import { theme } from "./styles/Themes";
import GlobalStyles from "./styles/GlobalStyle";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
