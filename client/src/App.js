import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import "./App.css";
import Application from "./pages/Application";
import UserProvider from "./components/UserProvier/UserProvier";
import Results from "./pages/ResultsPage"
import BodyParts from "./pages/BodyParts"
import Create from "./pages/Create"
import Nav from "./components/Navbar/Nav"
import Info from "./pages/Info"


function App() {
  // const [sharedInfo, setSharedInfo] = useState({})

  return (
    <Router>
      <div>        
        <Nav />            
        <UserProvider>
          <Switch>
          <Route exact path="/">
              <Application />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/bodyparts">
              <BodyParts/>
            </Route>
            <Route exact path="/symptoms">
            </Route>
          <Route exact path="/profile">
          <Application />
          </Route>
          
          </Switch> 
          </UserProvider>
      <Footer />
      </div>
    </Router >
  );
}

export default App;
