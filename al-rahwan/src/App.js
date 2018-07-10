import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Login from './Container/Login/Login'
class App extends Component {
  render() {
    return (
      <div className="">
          <Login/>

      </div>
    );
  }
}

export default App;
