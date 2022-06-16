import React from 'react'
import logo from '../../logo.png';
import './navbar.css'

function Navbar() {
  return (
    <div className="logowrapper">
        <img src={logo} className="App-logo" alt="logo" />
    </div> 
  )
}

export default Navbar;