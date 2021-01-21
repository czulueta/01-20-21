import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Cars from "./Cars.js"

function App() {
  return (
    <div className="App">
      <Link exact to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/cars"}>Cars</Link>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/cars"><Cars /></Route>
      </Switch>
    </div>
  );
}

export default App;
