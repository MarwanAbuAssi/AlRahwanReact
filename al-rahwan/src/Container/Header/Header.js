import React from 'react';
import  './Header.css'
class Header extends React.Component {
    render() {


        return (
            <div className='headerDiv ' >
                <span className='item'>Home</span>
                <span className='item'>Reservation</span>
                <span className='item'>Calender</span>
                <span className="userDiv " >User</span>

            </div>
        )
    }
}

export default Header;



