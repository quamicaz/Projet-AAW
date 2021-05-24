import React from "react";
import About from "./pages/About";
import {Home} from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Connect from "./pages/Connect";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/connect">
          <Connect />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
