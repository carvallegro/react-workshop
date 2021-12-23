import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, DEFAULT_THEME } from "@zendeskgarden/react-theming";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider focusVisibleRef={null} theme={DEFAULT_THEME}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
