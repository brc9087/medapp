import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";


const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
          setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  const styles = {

    body: {
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
      padding: "80px",
      backgroundColor: "#038989",
      color: "white",
      textAlign: "center",
    },
    button: {
      margin: "10px",
      padding: "10px"
    }
    
    
  }
  return (
    <div className="main" style={styles.body}>
      <h1>
        Reset your Password
      </h1>
      <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form action="">
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <Input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          
          />
          <div>
          <button   style = {styles.button} className="button is-info is-rounded"
            
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
          </div>
         
        </form>

        <Link
          to="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;