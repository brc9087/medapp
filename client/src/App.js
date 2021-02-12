import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Jumbotron from "../src/components/Jumbotron/index";
import SaveBooks from "../src/pages/savedBooksPage";
import SearchBooks from "../src/pages/searchBooksPage";
import "./App.css";
import Application from "./pages/Application";
import UserProvider from "./components/UserProvier/UserProvier";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <UserProvider>
          <Application />
        </UserProvider>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
