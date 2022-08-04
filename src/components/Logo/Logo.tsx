import React from 'react'

// import logo1 from './logo.png'; // Tell webpack this JS file uses this image
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import './Logo.css';




export default function Logo1() {
    // const logo1 = require ('../../imageslogo1.png')

    return (
    <img id="logo" src={logo1} alt="Logo" />
    // <img id="logo" src={logo2} alt="Logo" />
    // <img src={String(logo1)} />
    // <img  src={String(logo1)} />
    // <div> hello <div/>
    // <img src={logo1} className="App-logo" alt="logo" />
    // <img src={require('../../images./logo1.png')} />

   
  
    )
}