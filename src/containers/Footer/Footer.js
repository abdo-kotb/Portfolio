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
  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
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

      <form name="contact" method="POST" className="app__footer-form app__flex">
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
        <input type="hidden" name="form-name" value="contact" />
        <button onSubmit={handleSubmit} className="p-text">
          Send Message
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
