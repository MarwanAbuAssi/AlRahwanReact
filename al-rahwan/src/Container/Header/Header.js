import React from 'react';
import  './Header.css';
import {NavLink,Link, withRouter} from 'react-router-dom'
class Header extends React.Component {
    render() {
        console.log("---------------------------");

        return (
            <div className='headerDiv ' >
                <a href="/" className='item'>Home</a>
                <NavLink to="reservation" className='item'>Reservation</NavLink>
                <NavLink to="/calender" className='item' >Calender</NavLink>
                <NavLink to="/login">User</NavLink>

            </div>
        )
    }
}

export default Header;



