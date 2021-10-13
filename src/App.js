import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./CssStyles/Jumbo.css";
import Profile from "./views/Profile";
import Footer from "./components/Footer";
import Home from "./views/Home"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route path="/profile/:id" component={Profile} exact={true} />
          <Route path="/feed/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;