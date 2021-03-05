import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../utils/firebase";
import Input from "../components/Input/Input";
import Header from "../components/Header/Header";



const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
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
    },

    label: {
     margin: "0"
    },
    
    input: {
      width: "55%",
      padding: "10px",
      textAlign: "center"
    
    },

    head: {
      display: "block",
      textAlign: "center",
      paddingTop: "20px"
    },

    button: {
      padding: "10px"
    }

  }

  return (
    <div className = "main" style={styles.body}>

      <div style={styles.head}>
        <Header Logo={"/logo/steth.png"} />
      </div>



    

        <h1 className="formtitle">Sign In:</h1>
          {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
         <div> 
           <label htmlFor="userEmail" className="block" style={styles.label}>
            
            Email:
      </label >
          <Input  style = {styles.input}
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={onChangeHandler}
          />
          <label htmlFor="userPassword" className="block" style={styles.label}>
            Password:
      </label>
          <Input  style = {styles.input}
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={onChangeHandler}
          />
          </div >
          <div style = {styles.button}>
              <button className="button is-info is-rounded" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password)}}>Sign in</button>

          <p>or</p>
          <button
            className="button is-danger is-rounded"
            onClick={signInWithGoogle}
          >
            Sign in with Google
    </button>
          </div>
        
          <p className="text-center my-3">
            Don't have an account?
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
      </Link>{" "}
            <br />{" "}
            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
      </Link>


          </p>
        
   
    </div>
  );
};

export default SignIn;