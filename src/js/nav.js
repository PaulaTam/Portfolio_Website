import React from 'react';

const Nav = ({ change }) => {

  return (
    <nav className="text-custom-light flex flex-row gap-4 justify-end sticky top-0 p-3">
      {change ? "yes" : "no"}
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#other">Other</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Nav;