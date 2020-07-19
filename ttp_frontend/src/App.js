import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Transactions from './Components/Tables/Transactions'
import PortfolioContainer from './Containers/PortfolioContainer'
import LoginSignUpContainer from './Containers/LoginSignUpContainer';

export class App extends Component {


  render(){
    return (
     <>
         <Switch>
               <Route path='/login' component= {(props) => <LoginSignUpContainer/>}/>
               <Route path='/signup' component={(props) => <LoginSignUpContainer/>}/>
               <Route exact path='/' component={(props) => <PortfolioContainer/>}/>
               <Route path='/transactions' component={(props) => <Transactions/>}/>
          </Switch>
      </>
    );
  }


}

export default App;



