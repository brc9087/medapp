import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle, generateUserDocument } from "../utils/firebase";
import Input from "../components/Input/Input";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    }
    catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  // css 
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
      color: "white"
    },
    input: {
      width: "55%",
      padding: "10px",
      textAlign: "center",
      
    },

    label: {
      margin: "0"
    },
    title: {
      fontSize: "50px",
      textAlign: "center"

    },
    button: {
      padding: "10px"
    },
    buttonindiv: {
      margin: "-10px"
    },
  inputfield: { 
    padding: "10px"
  }

  }
  return (
    <div style={styles.body}>
      <h1 style={styles.title}>Sign Up</h1>
      <div >
        {error !== null && (
          <div>
            {error}
          </div>
        )}
<div style={styles.inputfield} >


        <label htmlFor="displayName" className="block" style={styles.label}>
          Display Name:
          </label>
        <Input style={styles.input}
          type="text"
          name="displayName"
          value={displayName}
          placeholder="E.g: Faruq"
          id="displayName"
          onChange={onChangeHandler}
        />
        </div>
        <div style={styles.inputfield}>
          <label htmlFor="userEmail" className="block" style={styles.label}>
          Email:
          </label>
        <Input style={styles.input}
          type="email"
          name="userEmail"
          value={email}
          placeholder="E.g: faruq123@gmail.com"
          id="userEmail"
          onChange={onChangeHandler}
        />
        </div>
        <div style={styles.inputfield}>
           <label htmlFor="userPassword" className="block" style={styles.label}>
          Password:
          </label>
        <Input style={styles.input}
          type="password"
          name="userPassword"
          value={password}
          placeholder="Your Password"
          id="userPassword"
          onChange={onChangeHandler}
        />
        </div>
       
<div style = {styles.button}>
        <button style = {styles.buttonindiv}
          className="button is-info is-rounded"
          onClick={event => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          Sign up
          </button>

        <p>or</p>
        <button style = {styles.buttonindiv} className="button is-danger is-rounded"
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}

        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?</p>
        <a style = {styles.buttonindiv}>
          <Link to="/" className="button is-info is-rounded">
            Sign in here
          </Link></a>

</div>
      </div>
    </div>

  );
};

export default SignUp;