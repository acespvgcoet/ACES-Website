import React from "react";
import Footer from "./Footer";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import Team from "./Team";

import TeamMembers from "./TeamMembers";
import Header from "./Header";
import Events from "./Events";
import Blogs from "./Blogs";
import Registration from "./Registration"
import Magazine from "./Magazine";
import Login from "./Login";
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
          <Route path="/events">
            <Header />
            <Events />
          </Route>

          <Route path="/magazine">
            <Header />
            <Magazine />
          </Route>

          <Route path="/blogs">
            <Header />
            <Blogs />
          </Route>
          <Route path="/signup">
            <Header />
            <Registration />
          </Route>
          <Route path="/signin">
            <Header />
            <Login />
          </Route>
          <Route path="/dashboard">
            <Header />
            This is dashboard
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
