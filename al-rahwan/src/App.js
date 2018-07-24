import React, {Component} from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import FullCalendar from 'fullcalendar';

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Routes from './Route/Route'
import './App.css';
import Header from './Container/Header/Header'
import BrowserRouter from "react-router-dom/es/BrowserRouter";

class App extends Component {
    render() {
        let header = <Header/>;
        return (
            <BrowserRouter>
                <div>
                    <Routes/>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
