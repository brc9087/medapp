import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Jumbotron from "../src/components/Jumbotron/index";
import Footer from "./components/Footer"
import SaveBooks from "../src/pages/savedBooksPage";
import SearchBooks from "../src/pages/searchBooksPage";
import "./App.css";
import Application from "./pages/Application";
import UserProvider from "./components/UserProvier/UserProvier";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail"
import Results from "./pages/ResultsPage"
import BodyParts from "./pages/BodyParts"
import Create from "./pages/Create"
import Navbar from "./components/Nav/index";
import Nav from "./components/Navbar/Nav"
import Info from "./pages/Info"
// import Symptoms from "./pages/Symptoms"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Navbar/>
        <UserProvider>
          {/* <BodyParts/> */}
          {/* <Books /> */}
          {/* <Detail /> */}
          {/* <Jumbotron/> */}
          <Switch>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/">
              <Application />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/bodyparts">
              <BodyParts />
            </Route>
            <Route exact path="/symptoms">
            </Route>
          </Switch> 
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
