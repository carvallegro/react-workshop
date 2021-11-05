import React from 'react'
import {Redirect, Router} from "@reach/router";
import {ChromeLayout} from "./layout/ChromeLayout";
import {UsersPage} from "./pages/Users";
import {routes} from "./pages/routes";

const App = () => (
    <Router>
        <ChromeLayout path='/'>
            <UsersPage path='/users'/>
            {routes.map(({Component, path}) =>
                <Component path={path}/>
            )}
            <Redirect from='/' to='/users'/>
        </ChromeLayout>
    </Router>
);

export default App;
