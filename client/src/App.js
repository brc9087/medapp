import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "../src/components/Jumbotron/index";
import SaveBooks from "../src/pages/savedBooksPage";
import SearchBooks from "../src/pages/searchBooksPage";
import "./App.css";
import Application from "./pages/Application";
import UserProvider from "./components/UserProvier/UserProvier";
import Books from "./pages/Books";
import Detail from "./pages/Detail"
import Login from "./pages/Login"
import Results from "./pages/ResultsPage"
import BodyParts from "./pages/BodyParts"


function App() {
  return (
    <Router>
      <div>
        <UserProvider>
          <Application />
        </UserProvider>
        <BodyParts/>
          {/* <Books /> */}
          {/* <Detail /> */}
          {/* <Login /> */}
          {/* <Jumbotron /> */}
          <Switch>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} /> */}
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
