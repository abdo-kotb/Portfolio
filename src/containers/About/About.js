import React from 'react';

import './About.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Let me <span>tell you</span>
        <br />
        about <span>Myself</span>
      </h2>
      <p className="app__about-text" style={{ marginTop: 15 }}>
        I'm a Web Developer located in UAE. I joined web development stack out
        of passion for building web apps and interactive websites. I love
        animations and creating dynamic user experiences.
      </p>
      <p className="app__about-text">
        Well-organized person, can work under pressure, and a problem solver.
      </p>
      <p className="app__about-text">
        I have a big experience in the Front-End spectrum, and I currently on my
        way to learn the MERN stack and become a Full-Stack Web Developer.
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
