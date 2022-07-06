import React, { useState } from 'react';

import './Navbar.scss';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        Abdulrhman
        <span>Kotb</span>
      </div>
      <ul className="app__navbar-links app__flex">
        {['home', 'about', 'work', 'skills', 'contact'].map(item => (
          <li className="app__flex p-text" key={`${item}Link`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu app__flex">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map(item => (
                <li onClick={() => setToggle(false)} key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
