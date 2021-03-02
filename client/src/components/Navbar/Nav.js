import React from "react";
import {auth} from "../../utils/firebase";

const styles = {
  navbar: {
    backgroundImage: "linear-gradient(#22687F, #5A8391, #22687F)",
    boxShadow: "0 3px 2px -2px rgba(0,0,0,2)",
  },
  navbaritems: {
    color: "white",
    fontWeight: "bold"
  }
}
function Nav(props) {
  return (
    <nav className="navbar" style={styles.navbar} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/logo/logo.png" width="120" height="120" />
        </a>
   
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          {/* where the user logs in age sex*/}
          <a style={styles.navbaritems} className="navbar-item" href="/info">
            Info
      </a>

          {/* Click Body Part that hurts */}
          <a style={styles.navbaritems} className="navbar-item" href="/bodyparts">
            Body Parts
      </a>

          {/* Results Page */}
          <a style={styles.navbaritems} className="navbar-item" href="/results">
            {props.name} Results
      </a>
          {/* Create Diagnosis */}
          <a style={styles.navbaritems} className="navbar-item" href="/create">
            Create Diagnosis
      </a>

          {/* Profile Page */}
          <a style={styles.navbaritems} className="navbar-item" href="/profile">
            Profile
      </a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a style={styles.navbaritems} className="navbar-item" onClick = {() => {auth.signOut()}}>Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;