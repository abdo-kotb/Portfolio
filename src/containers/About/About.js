import React from 'react';

import { motion } from 'framer-motion';

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
