import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';
import emailImg from '../../assets/email.png';

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();
  const { name, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        res => {
          console.log(res.text);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setLoading(false);
          setAlertMessage(
            "Your message has been successfully sent. We'll be in touch soon"
          );
          setTimeout(() => setAlertMessage(''), 3000);
        },
        err => {
          console.log(err.text);
          setLoading(false);
          setAlertMessage(
            'There was an error sending your message! Please try again.'
          );
          setTimeout(() => setAlertMessage(''), 3000);
        }
      );
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

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleChangeInput}
            name="name"
            required
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
            required
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
            required
          />
        </div>
        <button disabled={loading} className="p-text">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {alertMessage && (
        <AnimatePresence inital={false}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="email-alert"
          >
            <p>{alertMessage}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
