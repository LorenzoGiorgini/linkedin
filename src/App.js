import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./CssStyles/Jumbo.css";
import Profile from "./views/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route path="/" exact /> */}
          <Route path="/profile/:id" component={Profile} exact={true} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
