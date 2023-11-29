import React from 'react'
import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="port_container">
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="port_item">
          <img src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
