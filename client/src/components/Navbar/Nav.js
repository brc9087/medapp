
import React from "react";


const styles = {
    navbar: {
        backgroundColor: "white",
    },
    navbaritems: {
        color: "black"
    }
}

function Nav(props) {
    return (

<nav className="navbar" style = {styles.navbar} role="navigation" aria-label="main navigation">
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

  <div id="navbarBasicExample"  className="navbar-menu">
    <div className="navbar-start">
      <a style = {styles.navbaritems} className="navbar-item">
         Symptoms
      </a>

      <a style = {styles.navbaritems} className="navbar-item">
       Doctors
      </a>
      <a  style = {styles.navbaritems} className="navbar-item">
       Results
      </a>
      
    </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
        
          <a  style = {styles.navbaritems} className = "navbar-item" onClick = {props.button}>Sign out</a>

        </div>
      </div>
    </div>
  
</nav>
    );
}

export default Nav;