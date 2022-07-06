import React, { useState } from 'react';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import './Work.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

import { WORKS } from '../../utils/data';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filteredWorks, setFilteredWorks] = useState(WORKS);

  const handleWorkFilter = item => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') setFilteredWorks(WORKS);
      else setFilteredWorks(WORKS.filter(work => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Check out my recent <span>projects</span>
      </h2>
      <div className="app__work-filter app__flex">
        {['JS Frameworks', 'CSS Frameworks', 'JavaScript', 'CSS', 'All'].map(
          (item, i) => (
            <div
              key={i}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio app__flex"
      >
        {filteredWorks.map((work, i) => (
          <div className="app__work-item app__flex" key={i}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.demoLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h3 className="bold-text">{work.name}</h3>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
        <p className="bold-text">
          See more on my{' '}
          <a
            href="https://github.com/abdo-kotb"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{' '}
          profile
        </p>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
