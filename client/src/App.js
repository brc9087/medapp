import React, {useState} from "react";
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
import NewPage from "./pages/newPage"


function App() {
  const [sharedInfo, setSharedInfo] = useState({})

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
              <Results sharedInfo={sharedInfo} setSharedInfo={setSharedInfo} />
            </Route>
            <Route exact path="/info">
              <Info />
            </Route>
            <Route exact path="/create">
              <Create />
              <NewPage/>
            </Route>
            <Route exact path="/bodyparts">
              <BodyParts sharedInfo={sharedInfo} setSharedInfo={setSharedInfo}/>
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
