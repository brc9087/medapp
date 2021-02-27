import React, { useContext, useState, useEffect } from "react";
// import Nav from "../components/Navbar/Nav";
import Header from "../components/Header/Header";
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
      backgroundColor: "#0d9f9f",
      color: "white"

    }
  }

  return (
    <>
    <Header Logo="/logo/logo.png" />





            ))}






          </div>
        </div>

      </div>
    </>
  )
};

export default ProfilePage;