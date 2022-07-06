import React from 'react';

const NavDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, i) => (
        <a
          key={item + i}
          className="app__navigation-dot"
          href={`#${item}`}
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavDots;
