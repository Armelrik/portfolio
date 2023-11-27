import React from 'react'
import './Topbar.css';
import { Link } from 'react-router-dom';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          {/* <Link to="#intro">Contact</Link> */}
          <a href='#intro' className='logo'>Melrik digital.</a>
          <div className="itemContainer">
            {/* <Person /> */}
            <span>+233 54 740 4509</span>
          </div>
          <div className="itemContainer">
            {/* <Mail /> */}
            <span>contact@melrik.com</span>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;

