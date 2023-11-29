import React, { useEffect, useRef } from 'react'
import './Intro.css';
import { init } from 'ityped';

function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web developer", "3D Designer", "Mobile App"],
    });
  }, []);

  return (
    <div className="intro" id='intro'>
      <div className="left_intro">
        
          <div className="color_container">
            <span className="color_item" ></span>
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/274f29ce-0d3f-4ac2-a2aa-f9b7bd188b2a"  alt="" />
            <span className="color_item" ></span>
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b8a14493-3d9f-4b9b-b93a-56d0bc7243e9"  alt="" />
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/03e51e1e-9750-45a5-b75e-a1e341d4562a"  alt="" />
            <span className="color_item" ></span>
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5eb50f89-3e5a-480e-860c-8d40d3ba9ffe"  alt="" />
            <span className="color_item"></span>
            <span className="color_item" ></span>
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/86c71a79-2efe-4567-8665-b1e5a1fd9735"  alt="" />
            <span className="color_item" ></span>
            <img className="color_item" src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/97ef9643-5202-41aa-80f0-ceeabccdd099"  alt="" />
        </div>
      </div>
      <div className="right_intro">
        <div className="wrapper_intro">
          <h2>Hi there, I am</h2>
          <h1>Armel Kima</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  )
}

export default Intro;

