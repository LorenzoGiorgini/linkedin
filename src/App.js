import { BrowserRouter as Router , Route } from 'react-router-dom';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './CssStyles/Jumbo.css';
import Profile from './views/Profile';
import Footer from './components/Footer'
import ExperienceList from './components/ExperienceList';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route path="/" exact />
        <Route path="/profile/:id">
          <Profile />
        </Route>
      </Router>
      <ExperienceList/>
      <Footer/>
    </div>
  );
}

export default App;