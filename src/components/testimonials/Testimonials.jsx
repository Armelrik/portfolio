import React from 'react'
import './Testimonials.css';


function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="testi_container">
        <div className="testi_card">
          <div className="testi_top">
            <i className="fa-solid fa-arrow-turn-up"></i>
            <img src="assets/img/6.jpg" alt="" />
            <i className="fa-solid fa-youtube"></i>
          </div>
          <div className="testi_center">
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Commodi accusantium error minus nostrum aperiam a?
          </div>
          <div className="testi_bottom">
            <h3>Alex</h3>
            <h4>CEO of Infine</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
