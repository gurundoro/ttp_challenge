
import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
          <div className="logo">
            <h1>ttp Challenge</h1>
          </div>
             <ul>
                  <li><a href="/Portfolio">Portfolio</a></li>
                  <li><a href="/Transactions">Transactons</a></li>
                  <li><a href="/Signout">Signout</a></li>
             </ul>
        </nav>

    )
 
  };
  
  export default Navbar;