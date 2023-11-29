import React, { useState } from 'react'
import './Works.css';
import { wData } from './WorksData';

function Works() {

  const data = wData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
  }

  return (
    <div className='works' id='works'>
      <div className="works_slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(item => (
          <div className="works_container">
          <div className="works_item">
            <div className="works_left">
              <div className='works_left_container'>
                <div className="works_imgContainer">
                  {/* <img src='assets/img/1.jpg' alt='' /> */}
                  <i className={item.icon}></i>
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="works_right">
               <img src={item.img} alt={item.title} />
            </div>
          </div>
        </div>
        ) )}
      </div>
      <div className="arrow left" onClick={()=>handleClick("left")}>
        <i className="fa-solid fa-arrow-left fa-beat-fade"></i>
      </div>
      <div className="arrow right" onClick={()=>handleClick("right")}>
        <i className="fa-solid fa-arrow-right fa-beat-fade"></i>
      </div>
    </div>
  )
}

export default Works;

