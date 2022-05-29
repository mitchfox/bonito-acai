import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Logo from './Assets/logo.svg';

// CSS
import './App.css';

// Components
import VideoBackground from './Components/VideoBackground';
import Menu from './Components/Menu';
import ListCard from './Components/MenuItem';

// Landing Page - Jed Video and Menu
function App() {
  return (

    <div className='homePage'>
      <div className='logoContainer'>
        <img
          src={Logo}
          className='logo'
        />
        <h4 className='description'>Leeds Kirkgate Markets. LS2 7HN</h4>
      </div>

      <VideoBackground />
      <div className='menuContainer'>
      
      </div>
      <div style={{ width: "100vw", overflow: "auto" }}>
        <Menu />
      </div>
    
    </div>
  );
}

export default App;
