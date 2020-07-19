import React, { Component } from 'react'
import Login from '../Components/Forms/Login'
import SignUp from '../Components/Forms/Signup'
import { Redirect } from 'react-router-dom'

export default class LoginSignUpContainer extends Component {

    state = {
        email: '',
        name: '',
        password: '',
        // clicked: !this.props.history.location === '/login'
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name] :  e.target.value})
    }

    signUpSubmitHandler = (e) => {
        e.preventDefault()
        const {email, name, password} = this.state
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers:{
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({user: {email, name, password}})
        })
    }


    loginSubmitHandler = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "content-type": "application"
            },
            body: JSON.stringify({user:{email, password}})
        })
    }

    clickHandler = () => {
      this.state.clicked ?
      this.props.history.push('/signup') :
      this.props.history.push('/login')
      this.setState(
        {
          email: '',
          username: '',
          password: '', 
        }
      )
    }
    



    render() {
        let {
          email,
          name,
          password,
          clicked
        } = this.state
    
 
    
        return (
          <div className='overlay'>
            { this.props.user ?
              <Redirect to='/portfolio' /> :
              clicked ?
              <Login
                email={email}
                password={password}
                changeHandler={this.changeHandler}
                submitHandler={this.loginSubmitHandler}
                clickHandler={this.clickHandler}/> :
              <SignUp
                email={email}
                name={name}
                password={password}
                changeHandler={this.changeHandler}
                submitHandler={this.signUpSubmitHandler}
                clickHandler={this.clickHandler}/>
            }
          </div>
        )
      }
}
