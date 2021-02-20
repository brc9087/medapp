import React from "react";
const styles = {
    navbar: {
        backgroundColor: "white",
    },
<<<<<<< HEAD
    navbaritems: {
        color: "black"
    }
}
function Nav(props) {
    return (
<nav className="navbar" style = {styles.navbar} role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href= "">
      <img src="/logo/steth.png" width="35" height="30"/>
    </a>
    <a role="button" className="navbar-burger"aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
=======
    font: {
        color: "white",
        fontSize: "14pt",
        fontStyle: "italic"
    },
    text: {
        color: "pink"
    }
}
function Nav() {
    return (
        <nav style={styles.navBar} className="navbar navbar-expand-lg">
            <a style={styles.font} className="navbar-brand" href="/">
                <h2 className="text-white">OnlySymps</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item" id="save">
                        <a style={styles.text} className="nav-link" href="/results">My symptoms</a>
                    </li>
                    <li className="nav-item" id="login">
                        <a style={styles.text} className="nav-link" href="/login">login</a>
                    </li>
                    <li className="nav-item" id="signup">
                        <a style={styles.text} className="nav-link" href="/signin">signin</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}
export default Nav;

>>>>>>> 7413eaade566d870568246b8483b923cbff403d2
