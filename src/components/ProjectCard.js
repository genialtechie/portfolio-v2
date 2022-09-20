import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';

const ProjectCard = ({ title, desc, github, tools }) => {
  return (
    <div className="bg-[#202020] p-4 w-auto h-auto mb-8 rounded-lg m-4">
      <span className="p-3 w-full flex justify-end">
        <a
          className="transition duration500 hover:text-fuchsia-700"
          href={github}
        >
          <Github fill="currentColor" />
        </a>
      </span>
      <div>
        <h1 className="text-center text-lg hover:cursor-pointer transition duration500 hover:text-fuchsia-700">
          <a href={github}>{title}</a>
        </h1>
        <p className="my-2 text-center font-mono">{desc}</p>
        <div className="mt-3 flex flex-wrap">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-sm px-4 py-2 bg-black m-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
