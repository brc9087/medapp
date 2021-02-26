import React from "react";
import Application from "./Application"
import UserProvider from "../components/UserProvier/UserProvier"

function Symptoms(){
    return(
        <div className="wrapper">
          <h1>What are your Symptoms?</h1>
          
          <form onSubmit="">
            <fieldset>
              <label>
                <p>Syptoms</p>
                <input name="name" />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      )
}


export default Symptoms;
