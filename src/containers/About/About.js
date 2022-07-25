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
        I am a web developer based in the UAE. A passion for building
        interactive websites and web apps motivated me to pursue a career in web
        development. Animations and creating dynamic user experiences are two
        things that I enjoy.
      </p>
      <p className="app__about-text">
        An organized, team-oriented, capable problem solver, who works well in
        team environments.
      </p>
      <p className="app__about-text">
        I have a rich experience in both the Front-End and Back-End spectrums,
        and as a well-versed MERN Full-Stack web developer, I provide a wide
        range of services.
      </p>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__lightbg'
);
