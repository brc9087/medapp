
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import {auth} from "../utils/firebase";
import Nav from "../components/Navbar/Nav";
import Header from "../components/Header/Header";
const ProfilePage = () => {

  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  return (
    <>
    <Header Logo = "/logo/logo.png"/>
    <Nav button = {() => {auth.signOut()}}/>
      <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
 
        <div className = "md:pl-4">
        <h2 className = "text-2xl font-semibold"> {displayName}!</h2>
     
        </div>
      </div>
    </>
  ) 
};

export default ProfilePage;


// <div
// style={{
//   background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
//   backgroundSize: "cover",
//   height: "200px",
//   width: "200px"
// }}
// className="border border-blue-300"
// ></div>