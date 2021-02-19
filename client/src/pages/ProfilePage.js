
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import { auth } from "../utils/firebase";
import Nav from "../components/Navbar/Nav";
import Header from "../components/Header/Header";
const ProfilePage = () => {

  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  return (
    <>
      <Header Logo="/logo/logo.png" />
      <Nav button={() => { auth.signOut() }} />

      <div className="">
       


        <div className="tile is-ancestor">
          


              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                <h1 className="greeting"> Hope you feel better soon {displayName}!</h1>
                  <div className="content">


                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary">
                        <p className="title">Tell us what's wrong</p>
                        <p className="subtitle">Top tile</p>
                      </article>
                      <article className="tile is-child notification is-warning">
                        <p className="title">Past sick days</p>
                        <p className="subtitle">Bottom tile</p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child notification is-info">
                        <p className="title">Find a doctor</p>
                        <p className="subtitle">With an image</p>

                      </article>
                    </div>



                  </div>
                </article>
              </div>


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