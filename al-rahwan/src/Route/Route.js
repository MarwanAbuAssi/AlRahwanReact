import Login from '../Container/Login/Login'
import {BrowserRouter as Router, withRouter} from 'react-router-dom'
import Reservation from '../Container/Reservation/Reservation'
import React from 'react'
import Header from '../Container/Header/Header'
import {Route, Switch} from 'react-router-dom';

const routes = (props) => (
   // <Router>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/calender" component={Header}/>
            <Route exact path="/reservation" component={Reservation}/>
            {/*<Route path="**" component={Login}/>*/}
        </Switch>
    // </Router>
);

export default withRouter(routes);