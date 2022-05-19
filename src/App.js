import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

// CSS
import './App.css';

// Components
import VideoBackground from './Components/VideoBackground';
import Menu from './Components/Menu';

// Landing Page - Jed Video and Menu
function App() {
  return (

    <div className='homePage'>
      <div className='logoContainer'>
        <h2 className='logo'>Bonito Acai</h2>
        <h4 className='description'>123 Leeds Markets. LS1 3HY</h4>
      </div>

      <VideoBackground />
      <div className='menuContainer'>
        <h3>Menu</h3>
        <p>This is a menu item</p>
      
        
      </div>
      <div style={{ width: "100vw", overflow: "auto" }}>
        <Menu />
      </div>
      
    </div>
  );
}

export default App;
