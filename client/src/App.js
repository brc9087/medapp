  
import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Application from "./pages/Application";
import UserProvider from "./components/UserProvider/UserProvider";

function App() {
  return (
    <Router>
      <div>
        <UserProvider>
          <Application />
        </UserProvider>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;