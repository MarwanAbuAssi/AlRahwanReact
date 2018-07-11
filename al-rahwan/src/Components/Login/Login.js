import React from 'react'

import classes from './Login.css'

const Login = (props) => (

    <div className="formDiv">

        <form  id="loginForm" className="container">
            <div className="title">
                <div className="ui-datepicker-title">
                    <h3>Login</h3>
                </div>
                <label for="fname">User Name</label>
                <input class="loginInput" type="text" id="fname" name="userName" placeholder="UserName">

                </input>

                <label for="lname">Password</label>
                <input class="loginInput" type="password" id="lname" name="lastname" placeholder="Password">
                </input>


                <input type="button" value="Login">
                </input>

            </div>
        </form>
    </div>
)
export default Login;
