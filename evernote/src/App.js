import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/Home/Home.js"
import Favorite from "./components/Notes/Favorites.js"
import NoteDetails from "./components/Notes/NoteDetails.js"
import Edit from "./components/Home/Edit.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
    </div>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route path="/favourite" component={Favorite}/>
        <Route path ="/note/:id" component={NoteDetails} />
        <Route path="/edit/:id" component={Edit}/>
      </Switch>
    </Router>
    
  );
}

export default App;
