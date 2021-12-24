import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <div className='formContainer'>
            <form className='loginForm'>
                <input type="text" name="username" id="username" placeholder='username' required></input>

                <input type="password" name="password" id="pswd" placeholder='password' required></input>

                <button className='submitBtn'>Sign in</button>
            </form>
        </div>
    )
}

export default Login
