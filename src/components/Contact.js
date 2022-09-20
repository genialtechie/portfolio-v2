import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';
import { ReactComponent as Twitter } from '../images/twitter.svg';
import { ReactComponent as Mail } from '../images/mail.svg';
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full mt-20 mb-10 flex flex-col md:flex-row h-64"
    >
      <Bounce right>
        <div className="flex flex-row w-full md:h-64 md:flex-col md:w-1/12 justify-around m-4 md:m-0 md:mb-4 md:absolute md:bottom-0 md:left-0">
          <a
            className="self-center transition duration500 hover:text-fuchsia-700"
            href="https://github.com/genialtechie"
          >
            <Github
              fill="currentColor"
              className="scale-150"
            />
          </a>
          <a
            className="self-center transition duration500 hover:text-fuchsia-700"
            href="https://linkedin/in/haleembello"
          >
            <Linkedin
              fill="currentColor"
              className="scale-75"
            />
          </a>
          <a
            className="self-center transition duration500 hover:text-fuchsia-700"
            href="https://twitter.com/genialtechie"
          >
            <Twitter
              fill="currentColor"
              className="scale-125"
            />
          </a>
          <a
            className="self-center transition duration500 hover:text-fuchsia-700"
            href="mailto:only1hbo@icloud.com"
          >
            <Mail
              fill="currentColor"
              className="scale-75"
            />
          </a>
        </div>
      </Bounce>

      <div className="w-3/4 mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl mb-8">Get In Touch!</h1>
        <p className="font-mono text-lg mb-10">
          I am currently open to developer roles, shoot me an email if you like
          what you see!
        </p>
        <button className="mb-5 gradient-btn">
          <a href="mailto:only1hbo@icloud.com">Say hi</a>
        </button>
        <p className="font-mono text-sm text-slate-400">
          built by genialtechie
        </p>
      </div>
    </div>
  );
};

export default Contact;
