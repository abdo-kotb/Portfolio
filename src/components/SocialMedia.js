import React from 'react';

import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="mailto:aabdamoh@gmail.com">
          <SiGmail />
        </a>
      </div>
      <div>
        <a href="https://github.com/abdo-kotb" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <FaLinkedinIn />
      </div>
    </div>
  );
};

export default SocialMedia;
