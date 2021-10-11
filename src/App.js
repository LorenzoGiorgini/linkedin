import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CssStyles/Jumbo.css';
import Profile from './views/Profile';
import SideBar from './components/SideBar'

function App() {
  return (
    <div>
      <Profile/>
      <SideBar/>
    </div>
  );
}

export default App;