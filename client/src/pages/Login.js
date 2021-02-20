import React from "react";
import Application from "./Application"
import UserProvider from "../components/UserProvier/UserProvier"

function Login() {
    return (
        <div>
            <h1> Does it work </h1>
            <UserProvider>
                <Application />
            </UserProvider>
        </div>
    )
};

export default Login;