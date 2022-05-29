import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Logo from './Assets/logo.svg';
import { fontFamily, fontWeight } from '@mui/system';
// CSS
import './App.css';

// Components
import VideoBackground from './Components/VideoBackground';
import Menu from './Components/Menu';


import ButtonNav from './Components/ButtonNav';

// Landing Page - Jed Video and Menu
function App() {


  return (

    <div className='homePage'>
      <div className='logoContainer'>
        <img
          src={Logo}
          className='logo'
        />
        <h4 className='description'>Stall 23 Kirkgate Market, Leeds, LS2 7HN</h4>
       

      </div>

      <div className='buttonNav'>
          <ButtonNav />
        </div>

      <VideoBackground />
      <div className='menuContainer'>
        <Menu />
      </div>
      <div style={{ width: "100vw", overflow: "auto" }}>

      </div>

    </div>
  );
}

export default App;
