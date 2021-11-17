import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./views/Profile";
import Home from "./views/Home"
import LoginPage from "./components/LoginPage";

import "./CssStyles/Jumbo.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <LoginPage/>
        <Switch>
          <Route path="/profile/:id" component={Profile} exact={true} />
          <Route path="/feed/" exact component={Home} />
          <Route render={() => <Redirect to="/feed/" />} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;