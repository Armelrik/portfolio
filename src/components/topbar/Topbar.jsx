import React from 'react'
import './Topbar.css';
// import { Link } from 'react-router-dom';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper_topbar">
        <div className="left_topbar">
          {/* <Link to="#intro">Contact</Link> */}
          <a href='#intro' className='logo_topbar'>Melrik digital.</a>
          <div className="itemContainer_topbar">
            {/* <Person /> */}
            <i className="fa-solid fa-address-book"></i>
            <span>+233 54 740 4509</span>
          </div>
          <div className="itemContainer_topbar">
            {/* <Mail /> */}
            <i className="fa-solid fa-envelope"></i>
            <span>contact@melrik.com</span>
          </div>
        </div>
        
        <div className="right_topbar">
          <div className="hamburger_topbar" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1_topbar"></span>
            <span className="line2_topbar"></span>
            <span className="line3_topbar"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;

