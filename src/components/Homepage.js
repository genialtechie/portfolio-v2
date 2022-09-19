import React from 'react';

const Homepage = () => {
  return (
    <div
      id="about"
      className="px-7 w-full md:mx-auto md:w-2/3 mt-20 md:mt-28 2xl:mt-40 flex flex-col mb-24"
    >
      <div className="mb-6 font-mono text-lg">Hi, my name is</div>
      <div className="mb-6 text-3xl md:text-6xl">Haleem Bello.</div>
      <div className="mb-6 gradient-text text-4xl md:text-6xl">
        I build things that work on computers.
      </div>
      <p className="font-mono text-md mb-6">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences.
      </p>
      <button className="font-mono p-4 w-fit self-center md:self-auto gradient-btn">
        Check out my work!
      </button>
    </div>
  );
};

export default Homepage;
