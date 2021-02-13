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
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
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


  ///CSS

  const styles = {
    form:{
      display: "inline-flexbox",
      textAlign: "center",
      backgroundImage: "url(" + "./logo/steth.png" + "), linear-gradient(black, teal, black)",
      backgroundRepeat: "no-repeat",

      color: "white"
    },
    title: {
      fontSize: "50px",
      textAlign: "center"
      
    },
    body: {
      
    }
  }

  return (
    
    <div style = {styles.form}>
      <h1 style= {styles.title}>Sign Up</h1>
     <div >
        {error !== null && (
          <div>
            {error}
          </div>
        )}
  
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={onChangeHandler}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <Input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={onChangeHandler}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <Input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={onChangeHandler}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
    
        <p className="text-center my-3">or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
          className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
        >
          Sign In with Google
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>{" "}
        </p>
  
      </div>
    </div>
   
    
  );
};

export default SignUp;