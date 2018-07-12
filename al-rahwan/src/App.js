import React, {Component} from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import FullCalendar from 'fullcalendar';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Routes from './Route/Route'
import ScheduleCalender from './Container/Schedule/ScheduleCalender'
import './App.css';
import Login from './Container/Login/Login'
import Reservation from './Container/Reservation/Reservation'
import ViewReservation from './Container/viewReservation/viewReservation'
import {  Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
            <Routes/>
            </div>

        );
    }
}

export default App;
