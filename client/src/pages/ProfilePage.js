import React, { useContext, useState, useEffect } from "react";
// import Nav from "../components/Navbar/Nav";
//import Header from "../components/Header/Header";
import UserContext from "../utils/UserContext";
import API from "../utils/API"
import DeleteBtn from "../components/DeleteBtn/index"

import { auth } from "../utils/firebase";
const ProfilePage = () => {

  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  const [bio, setBio] = useState([])

  useEffect(() => {
    loadBio()
  }, [])

  function loadBio() {
    API.getBios()
      .then(res =>
        setBio(res.data))
      .catch(err => console.log(err))
  };

  function deleteBio(id) {
    API.deleteBio(id)
      .then(res => loadBio())
      .catch(err => console.log(err));
  }

  const styles = {
    body: {
      postion: "center",
      width: "100%",
      height: "60%",
      backgroundImage: `url(${"https://images.pexels.com/photos/6753136/pexels-photo-6753136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})`,
      padding: "80px",
      backgroundColor: "#038989",
      color: "white",
      textAlign: "center",
    },
    tiles: {
      width:"60px",
      color:"black"
    },
    parent: {
      backgroundColor: "transparent",
      
    },
    child: {
      backgroundColor: "blue",
      color: "white"

    },
    
  }

  return (
    <>
      

      <div className="main" style={styles.body}>
        <div >

          <div className="tile is-ancestor">
            {bio.map(bio => (
              <div className="tile is-parent" style={styles.tiles} key={bio._id}>
                <article className="tile is-child notification " style={styles.parent}>
                  <h1 className="greeting"> {displayName}'s Profile Page</h1>
                  <div className="content">


                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification " style={styles.child}>
                      <h1 style={styles.child} >Age:</h1> <h3>{bio.age}</h3>
                        {/* <p >Top tile</p> */}
                      </article>
                      <article className="tile is-child notification " style={styles.child}>
                      <h1 style={styles.child} >Gender:</h1> <h3>{bio.gender}</h3>
                        {/* <p>Bottom tile</p> */}
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child notification " style={styles.child}>
                        <h1 style={styles.child}>Medical History:</h1> <h3>{bio.medhistory}</h3>
                        {/* <p >With an image</p> */}
                      </article>
                    </div>

                    <div className="tile is-parent">
                      <article className="tile is-child notification " style={styles.child}>
                      <h1 style={styles.child} >Symptoms:</h1> <h3>{bio.symptoms}</h3>
                        {/* <p>Find a doctor</p>
                        <p >With an image</p> */}
                      </article>
                    </div>

                  </div>
                </article>
                <DeleteBtn onClick={() => deleteBio(bio._id)} />
              </div>
              



            ))}






          </div>
        </div>

      </div>
    </>
  )
};

export default ProfilePage;