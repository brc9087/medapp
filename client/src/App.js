import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Create from "./pages/Create"
import Nav from "./components/Nav/index"
import Info from "./pages/Info"
import Symptoms from "./pages/Symptoms"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <UserProvider>
          {/* <Application /> */}
          {/* <BodyParts/> */}
          {/* <Create/> */}
          {/* <Books /> */}
          {/* <Detail /> */}
          {/* <Login /> */}
          {/* <Jumbotron /> */}
          {/* <Info/> */}
          <Switch>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/">
              <Application />
            </Route>
            <Route exact path="/info" component={Info}>
              {/* <Info /> */}
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/bodyparts">
              <BodyParts />
            </Route>
            <Route exact path="/symptoms">
              <Symptoms />
            </Route>
            {/* <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} /> */}
          </Switch>
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
