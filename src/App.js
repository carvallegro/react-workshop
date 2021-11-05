import React from 'react'
import {Redirect, Router} from "@reach/router";
import {ChromeLayout} from "./layout/ChromeLayout";
import {UsersPage} from "./pages/Users";

const App = () => (
    <Router>
        <ChromeLayout path='/'>
            <UsersPage path='/users'/>
            <Redirect from='/' to='/users'/>
        </ChromeLayout>
    </Router>
);

export default App;
