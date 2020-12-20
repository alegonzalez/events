import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../src/pages/login/';
import Register from "../src/pages/register";
import Dashboard from '../src/pages/dashboard';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}