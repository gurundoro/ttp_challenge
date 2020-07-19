import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
    
  
  render() {

  return (
        <nav>
          <div className="logo">
            <h1>ttp Challenge</h1>
          </div>
             <ul>
                  <li><a href="/Portfolio">Portfolio</a></li>
                  <li><a href="/Transactions">Transactons</a></li>
                  <li><a href="/login">Signout</a></li>
             </ul>
        </nav>

    )
  
  }
 
};
  
  export default Navbar;