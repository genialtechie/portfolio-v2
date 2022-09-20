import React, { useState, forwardRef } from 'react';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';
import { FEATURED, PROJECTS } from './Projects';
import Fade from 'react-reveal/Fade';

const MyWork = forwardRef((props, ref) => {
  const [showBtn, setShowBtn] = useState({
    projects: PROJECTS,
    itemsToShow: 4,
    expanded: false,
  });

  function handleClick(e) {
    e.preventDefault();
    showBtn.itemsToShow === 4
      ? setShowBtn({
          projects: showBtn.projects,
          itemsToShow: showBtn.projects.length,
          expanded: true,
        })
      : setShowBtn({
          projects: showBtn.projects,
          itemsToShow: 4,
          expanded: false,
        });
  }

  return (
    <div
      ref={ref}
      id="my-work"
      className="page mb-28 mt-6 px-7 w-full md:mx-auto md:w-3/4 flex flex-col"
    >
      <h2 className="text-3xl mt-12 pt-14 mb-6">Explore my projects</h2>
      <Fade
        bottom
        cascade
      >
        <div className=" md:block">
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
      </Fade>

      <div className="mt-3 flex flex-col">
        <h2 className=" md:block text-3xl pt-6 mb-6">
          Other interesting works...
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {showBtn.projects.slice(0, showBtn.itemsToShow).map((card) => (
            <ProjectCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              github={card.github}
              tools={card.tools}
            />
          ))}
        </div>
        <button
          className="font-mono p-4 w-fit mt-4 self-center gradient-btn"
          onClick={handleClick}
        >
          {showBtn.expanded ? 'See less ...' : 'See More ...'}
        </button>
      </div>
    </div>
  );
});

MyWork.displayName = 'MyWork';

export default MyWork;
