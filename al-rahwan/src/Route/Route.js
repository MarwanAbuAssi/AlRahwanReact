import {  Route, Switch } from 'react-router-dom'
import Login from '../Container/Login/Login'
import { BrowserRouter as Router } from 'react-router-dom'
import Reservation from '../Container/Reservation/Reservation'
import React from 'react'
const routes = ( props ) => (
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/reservation" component={Reservation}/>
            <Route path="**" component={Login}/>
        </Switch>
    </Router>
);

export default routes;