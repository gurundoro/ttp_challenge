import React from 'react'
import './Form.css'

const Login = (props) => {
    return (
        <div className="d-flex justify-content-center login-container">
            <form className="login-form text-center" onSubmit={props.submitHandler}>
                <h1 className="mb-5 font-weight-light text-uppercase">Login</h1>
                <div className="form-group">
                <input 
                type="text" 
                className="form-control rounded-pill form-control-lg" 
                name="email" 
                placeholder="email"
                onChange={props.changeHandler}
                />
                </div>
                <div className="form-group">
                <input 
                type="password" 
                className="form-control rounded-pill form-control-lg"
                 name="password"
                placeholder="password"
                onChange={props.changeHandler}
                />
                <button className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Log In</button>
                <p className="mt-3 font-weight-normal">Dont have an account?<a onClick={props.clickHandler}> Sign Up</a></p>
                </div>
            </form>
        </div>

    )
}


export default Login