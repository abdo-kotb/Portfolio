import React from 'react';

import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <SiGmail />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
