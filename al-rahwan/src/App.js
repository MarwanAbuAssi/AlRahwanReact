import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import FullCalendar from 'fullcalendar';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import ScheduleCalender from './Container/Schedule/ScheduleCalender'
import './App.css';
import Login from './Container/Login/Login'
class App extends Component {
  render() {
    return (
      <div className="">
          {/*<Login/>*/}
        <ScheduleCalender/>

      </div>
    );
  }
}

export default App;
