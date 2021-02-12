import { Link } from "react-router-dom";
import React from "react";


function Nav({smalllogo}){
    return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  
      <img src={smalllogo} width="49" height="10"/>


    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Doctors
      </a>

      <a className="navbar-item">
        Results
      </a>

      
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>

    

</nav>
       
    )
}

export default Nav;