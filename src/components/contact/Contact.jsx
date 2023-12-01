import React, { useState } from 'react'
import './Contact.css';

function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

  }
  return (
    <div className='contact' id='contact'>
      <div className="contact_left">
        <img src="assets/img/6.jpg" alt="" />
      </div>
      <div className="contact_right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll check it out!</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact;

