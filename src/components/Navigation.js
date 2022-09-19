import React from 'react';
import { ReactComponent as Contact } from '../images/contact.svg';
import { ReactComponent as Home } from '../images/home.svg';
import { ReactComponent as Interests } from '../images/interests.svg';
import { ReactComponent as Work } from '../images/my-work.svg';
import { ReactComponent as Resume } from '../images/resume.svg';

const Navigation = () => {
  return (
    <nav className="page-nav text-xs md:text-xl flex flex-row justify-center md:justify-end">
      <ul className="flex md:flex-row mx-4 py-5 md:mr-10">
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <Home
            className="md:hidden scale-75"
            fill="currentColor"
          />
          <a href="#about">Home</a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <Work
            className="md:hidden scale-75"
            fill="currentColor"
          />
          <a href="#my-work">Portfolio</a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <Interests
            className="md:hidden scale-75"
            fill="currentColor"
          />
          <a href="#interests">Interests</a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 hover:drop-shadow-md">
          <Contact
            className="md:hidden scale-75"
            fill="currentColor"
          />
          <a href="#contact">Say hi!</a>
        </li>
        <li className="px-3 text-center transition duration-500 ease-in-out hover:text-fuchsia-700 md:hover:text-2xl md:hover:px-5 md:hover:drop-shadow-md ml-1 border-l-2 md:border-l-4 border-white">
          <Resume
            className="md:hidden scale-75"
            fill="currentColor"
          />
          <a href="#download-resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
