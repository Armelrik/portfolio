import React from 'react'
import './Intro.css';

function Intro() {
  return (
    <div className="intro" id='intro'>
      <div className="left_intro">
        <div className="imgContainer_intro">
          <img src='assets/img/1.jpg' alt=''/>
        </div>
      </div>
      <div className="right_intro">
        <div className="wrapper_intro">
          <h2>Hi there,I am</h2>
          <h1>Armel Kima</h1>
          <h3>Web developer<span></span></h3>
        </div>
        <a href='#portfolio'>
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  )
}

export default Intro;

