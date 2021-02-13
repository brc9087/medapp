
import React from "react";


function Nav(props) {
    return (

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="">
      <img src="/logo/steth.png" width="35" height="30"/>
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
         Symptoms
      </a>

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
        
          <button className = "button is-link is-light" onClick = {props.button}>Sign out</button>

        </div>
      </div>
    </div>
  
</nav>
    );
}

export default Nav;
