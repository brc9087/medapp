import React from "react";
import Application from "./Application"
import UserProvider from "../components/UserProvier/UserProvier"

function Info() {
    return (
        <div>
            <h1> Info </h1>
            <h2>What Is Your Age</h2>

            <form id="Age">
                <input class="form-control form-control-lg" type="text" name="Age"
                    style="margin-left: 90px; margin-right: 40px;">
                    <button type="submit" class="btn btn-danger danger" style="height: 60px; width: 100px;">Submit</button>
            </form>


            <h2>What Is Your Sex</h2>
            <form>
                <input type="radio" name="sex"value="male"> Male </input>
                
                <input type="radio" name="sex"value="female"> Female </input>

            </form>
            

           

        </div>
    )
};

export default Info;