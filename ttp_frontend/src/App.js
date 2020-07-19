import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Transactions from './Components/Tables/Transactions'
import PortfolioContainer from './Containers/PortfolioContainer'
import LoginSignUpContainer from './Containers/LoginSignUpContainer';

export class App extends Component {

  state = {
    user: '',
    transactions: []
  }

  setUser = (user) => {
    this.setState({user: user, transactions: user.transactions})
  }

  componentDidMount() {
    let token = localStorage.token;
    fetch('http://localhost:3000/api/v1/get_user', {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
     .then(res => res.json())
     .then(data => {
       if(data.error){
         console.log(data.error)
       }else {
         this.setCurrentUser(data.user)
       }
     })
     .catch(console.error)
  }


  render(){
     
    const {user, transactions} = this.state
    const {setUser} = this
   
    return (
     <>
         <Switch>
          <Route path='/login' component= {(props) => <LoginSignUpContainer {...props} user={user} setUser={setUser} />}/>
          <Route path='/signup' component={(props) => <LoginSignUpContainer {...props} user={user} setUser={setUser} />}/>
               <Route exact path='/portfolio' component={(props) => <PortfolioContainer user={user} transactions={transactions} />}/>
               <Route path='/transactions' component={(props) => <Transactions user={user} transactions={transactions}    />}/>
          </Switch>
      </>
    );
  }


}

export default App;



