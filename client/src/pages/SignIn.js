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


  //CSS

  const styles = {
    body: {
      backgroundColor: "black",
      textAlign: "center",
      height: "100%"
    },
    form: {
      textAlign: "center",
      backgroundColor: "rgb(57, 78, 127)",
      color: "white",
      display: "inline-flexbox",
      marginLeft: "20%",
      marginRight: "20%",
      marginTop: "2%",
      marginBottom: "5%"

    },
    inputdiv: {
      marginLeft: "20%",
      marginRight: "20%"
    },
    logo: {
      backgroundImage: "url(" + "./logo/unnamed.png" + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    footer: {

    }
  }

  return (
    <div style={styles.body}>

     
        <Header Logo={"/logo/steth.png"} />
     

      <form class="box" style={styles.form}>

        <h1 className="formtitle">Sign In</h1>
        <div className="">
          {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
          <form className="SigninForm" style={styles.inputdiv}>
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
            <button class="button is-info is-rounded" onClick={(event) =>{ signInWithEmailAndPasswordHandler(event, email, password)}}>Sign in</button>

          </form>
          <p className="text-center my-3">or</p>
          <button
            className="button is-danger is-rounded"
            onClick={signInWithGoogle}
          >
            Sign in with Google
        </button>
          <p className="text-center my-3">
            Don't have an account?{" "}
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
          </Link>{" "}
            <br />{" "}
            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
          </Link>


          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;