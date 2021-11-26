import React from "react";
import { Redirect, Router } from "@reach/router";
import { ChromeLayout } from "./layout/ChromeLayout";
import { UsersPage } from "./pages/Users";
import { UserPage } from "./pages/User";
import { routes } from "./pages/routes";

const App = () => (
  <Router>
    <ChromeLayout path="/">
      <Redirect from="/" to="/users" />
      <UsersPage path="/users" />
      <UserPage path="/user" />
      {routes.map(({ Component, path }) => (
        <Component path={path} />
      ))}
    </ChromeLayout>
  </Router>
);

export default App;
