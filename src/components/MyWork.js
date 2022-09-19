import React from 'react';
import FeaturedProject from './FeaturedProject';
import MusicKeyboard from '../images/music-events.PNG';
import ExpenseTracker from '../images/expense-tracker.PNG';

const FEATURED = [
  {
    title: 'Music Keyboard',
    desc: "This is a javascript app I built for Wes Bos' 30 days of code challenge. It plays drum sounds and does a little animation depending on the pressed key.",
    image: MusicKeyboard,
    tools: ['HTML', 'CSS', 'VanillaJS'],
    github: 'https://github.com/genialtechie/javascript-music-events',
    preview:
      'https://632776409c51cc731cf771ce--effortless-cocada-cb301b.netlify.app/',
    right: true,
  },
  {
    title: 'Expense Tracker',
    desc: ' I built this budget app to get familiar with the basics of react. I learnt how to manipulate state, props & I utilized several react hooks like useEffect, and a custom localStorage hook.',
    image: ExpenseTracker,
    tools: ['React', 'Tailwind', 'Netlify'],
    github: 'https://github.com/genialtechie/expense-tracker',
    preview:
      'https://62c8e0312db9040f98a8490c--bespoke-medovik-287ab6.netlify.app/',
    right: false,
  },
];
const MyWork = () => {
  return (
    <div
      id="my-work"
      className="mt-6 px-7 w-full md:mx-auto md:w-2/3 flex flex-col"
    >
      <h2 className="text-3xl pt-6 mb-6">Explore my projects</h2>
      <div>
        {FEATURED.map((project) => (
          <FeaturedProject
            key={project.title}
            title={project.title}
            desc={project.desc}
            image={project.image}
            tools={project.tools}
            github={project.github}
            preview={project.preview}
            right={project.right}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
