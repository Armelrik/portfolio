import React from 'react'
import './Testimonials.css';
import { testimonials } from './TData';


function Testimonials() {

  const data = testimonials;

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="testi_container">
        {data.map((d) => (
          <div className={d.featured ? "testi_card featured" : "testi_card"}>
          <div className="testi_top">
            <i className="fa-solid fa-arrow-turn-up"></i>
            <img src={d.img} alt={d.title} />
            <i className={d.icon}></i>
          </div>
          <div className="testi_center">
            {d.desc}
          </div>
          <div className="testi_bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials;
