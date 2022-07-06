import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';
import emailImg from '../../assets/email.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <h2 className="head-text">
        Let's <span>chat</span> 🤗
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={emailImg} alt="email" />
          <a href="mailto:aabdamoh@gmail.com" className="p-text">
            aabdamoh@gmail.com
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChangeInput}
            name="name"
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChangeInput}
            name="email"
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" onClick={handleSubmit}>
          {loading ? 'Sending...' : 'Send Messag'}e
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
