import { BrowserRouter as Router , Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './CssStyles/Jumbo.css';
import Profile from './views/Profile';


function App() {


  return (
    <div>
      <Router>
      <NavBar/>
      <Route path="/" exact/>
      <Route path="/profile/lorenzogiorgini"  exact>
        <Profile/>
      </Route>
      </Router>
    </div>
  );
}

export default App;

