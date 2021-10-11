import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import './CssStyles/Jumbo.css';
import Profile from './views/Profile';
import SideBar from './components/SideBar'


function App() {
  return (
    <div>
      
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;