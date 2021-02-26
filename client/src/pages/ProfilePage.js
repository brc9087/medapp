import React, { useContext } from "react";
import Nav from "../components/Navbar/Nav";
import Header from "../components/Header/Header";

import UserContext from "../utils/UserContext";

import {auth} from "../utils/firebase";
const ProfilePage = () => {

  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  const styles = {
    body: {
    postion: "fixed",
      width: "100%",
      height: "100%",
      backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
      padding: "80px",
      backgroundColor: "#038989",
      color: "white",
      textAlign: "center",
    },
    tiles: {
      color: "white"
    },
    parent: {
      backgroundColor: "#4ac8c8"
    },
    child: {
      backgroundColor: "#0d9f9f"

    }


   
  }

  return (
    <>
    <Header Logo="/logo/logo.png" />
    <Nav 
    name = {displayName + "'s"}
    button= {() => { auth.signOut() }} />

    <div className = "main"  style={styles.body}>
      <div >
    
      <div className="tile is-ancestor">
          


          <div className="tile is-parent" style = {styles.tiles}>
            <article className="tile is-child notification " style = {styles.parent}>
            <h1 className="greeting"> Hope you feel better soon {displayName}!</h1>
              <div className="content">


                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification " style = {styles.child}>
                    <p>Tell us what's wrong</p>
                    <p >Top tile</p>
                  </article>
                  <article className="tile is-child notification "style = {styles.child}>
                    <p>Past sick days</p>
                    <p>Bottom tile</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification " style = {styles.child}>
                    <p>Find a doctor</p>
                    <p >With an image</p>

                  </article>
                </div>



              </div>
            </article>
          </div>


    </div>
      </div>
      
    </div>
    </>
  ) 
};

export default ProfilePage;