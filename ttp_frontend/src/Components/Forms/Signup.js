import React from 'react'
import './Form.css'

const SignUp = () => {
    return (
        <div className="d-flex justify-content-center login-container">
            <form className="login-form text-center">
                <h1 className="mb-5 font-weight-light text-uppercase">SignUp</h1>
                <div className="form-group">
                <input type="text" className="form-control rounded-pill form-control-lg" name="name" placeholder="name"/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control rounded-pill form-control-lg" name="email" placeholder="email"/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control rounded-pill form-control-lg" name="password" placeholder="password"/>
                <button className="btn mt-5 rounded-pill btn-lg btn-custom btn-block text-uppercase">Sign Up</button>
                <p className="mt-3 font-weight-normal">Have an account?<a href=""> Log In</a></p>
                </div>
            </form>
        </div>

    )
}


export default SignUp