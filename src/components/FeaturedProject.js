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
      className={`relative w-full flex mt-28 mb-40 ${
        right ? 'flex-row' : 'flex-row md:flex-row-reverse'
      }`}
    >
      <div className="h-96 md:w-3/5">
        <a
          target="_blank"
          rel="noreferrer"
          href={preview}
        >
          <img
            src={image}
            alt="Project preview"
            className="object-fill h-full w-full opacity-40 transition duration-300 hover:opacity-100"
          />
        </a>
      </div>
      <div
        className={`${
          right ? 'right-0' : 'md:left-0'
        } absolute top-0 w-4/5 lg:w-3/5 h-full p5 text-md lg:text-lg flex flex-col`}
      >
        <div
          className={`${
            right ? 'self-end text-right' : 'self-start'
          } p-2 w-fit `}
        >
          <h3 className="font-mono py-2">Featured Project</h3>
          <h1 className="hover:cursor-pointer transition duration500 hover:text-fuchsia-700 mb-3 md:mb-7">
            <a
              target="_blank"
              rel="noreferrer"
              href={preview}
            >
              {title}
            </a>
          </h1>
        </div>
        <div className={`p-3 lg:p-5 bg-[#202020] opacity-90 shadow-lg`}>
          <p className="mb-4 font-mono">{desc}</p>
          <div className="hidden sm:flex sm:flex-row sm:flex-wrap">
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
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
          >
            <Github
              className="mx-2 transition duration500 hover:text-fuchsia-700"
              fill="currentColor"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={preview}
          >
            <Link
              className="mx-2 scale-50 transition duration500 hover:text-fuchsia-700"
              fill="currentColor"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
