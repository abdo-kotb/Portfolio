import React, { useState } from 'react';

import ThemeContext, { themes } from '../../contexts/ThemeContext';

import './Navbar.scss';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { RiSunLine } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

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
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <button
            onClick={() =>
              changeTheme(theme === themes.dark ? themes.light : themes.dark)
            }
            className="app__theme"
          >
            <motion.div whileHover={{ y: [0, 5] }} whileTap={{ y: -50 }}>
              {theme === themes.dark ? (
                <RiSunLine className="sun" />
              ) : (
                <MdDarkMode className="moon" />
              )}
            </motion.div>
          </button>
        )}
      </ThemeContext.Consumer>
      <div className="app__navbar-menu app__flex">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="modal"
              initial={{ x: [0, 500] }}
              animate={{ x: [500, 0] }}
              exit={{ x: [0, 500] }}
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
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
