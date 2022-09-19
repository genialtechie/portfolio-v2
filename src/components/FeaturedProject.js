import React from 'react';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Link } from '../images/link.svg';

const FeaturedProject = ({
  image,
  title,
  desc,
  tools,
  github,
  preview,
  right,
}) => {
  return (
    <div
      className={`relative w-full flex mt-6 mb-10 ${
        right ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <div className="md:w-3/5">
        <img
          src={image}
          alt="Project preview"
          className="opacity-40 transition duration-300 hover:opacity-100"
        />
      </div>
      <div className="md:w-2/5">
        <div className={`${right ? 'text-right' : 'text-left'}`}>
          <h3 className="font-mono py-2">Featured Project</h3>
          <h1 className="text-lg hover:cursor-pointer transition duration500 hover:text-fuchsia-700">
            {title}
          </h1>
        </div>
        <div
          className={`${
            right ? 'right-0' : 'left-0'
          } absolute w-3/5  top-28 p-5 bg-[#181818] opacity-90 shadow-lg`}
        >
          <p className="mb-4 font-mono">{desc}</p>
          <div>
            {tools.map((skill) => (
              <span
                key={skill}
                className="font-mono px-4 py-2 bg-black mx-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`${
            right ? 'right-0' : 'left-0'
          } absolute bottom-0 flex flex-row items-center`}
        >
          <a href={github}>
            <Github
              className="transition duration500 hover:text-fuchsia-700"
              fill="currentColor"
            />
          </a>
          <a href={preview}>
            <Link
              className="scale-50 transition duration500 hover:text-fuchsia-700"
              fill="currentColor"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
