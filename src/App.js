import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Profile from "./views/Profile";
import Home from "./views/Home"
import LoginPage from "./components/LoginPage";

import "./CssStyles/Jumbo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/profile/:id" exact render={() => <Profile user={user} setUser={setUser}/>} />
          <Route path="/feed/" exact render={() => <Home user={user} setUser={setUser}/>} />
          <Route path="/" exact render={() => <LoginPage user={user} setUser={setUser}/>} />
          <Route render={() => <Redirect to="/feed/" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;