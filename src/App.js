import React from "react";
import { Redirect, Router } from "@reach/router";
import { ChromeLayout } from "./layout/ChromeLayout";
import { routes } from "./pages/routes";

const App = () => (
  <Router>
    <ChromeLayout path="/">
      <Redirect noThrow from="/" to="/users" />
      {routes.map(({ Component, path }) => (
        <Component path={path} />
      ))}
    </ChromeLayout>
  </Router>
);

export default App;
