import React from "react";
import Footer from "./Footer";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Team from "./Team";

import TeamMembers from "./TeamMembers";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/teams/:teamName">
            <Header />
            <TeamMembers />
          </Route>

          <Route path="/teams">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
