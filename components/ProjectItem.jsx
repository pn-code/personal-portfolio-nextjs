import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCodeSquare, BsLink45Deg } from "react-icons/bs";

const ProjectItem = ({
  title,
  type,
  imgSrc,
  imgAlt,
  href,
  demo,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4 group hover:bg-gradient-to-r from-[#8336c66d] to-[#7327bfac]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <h3 className="text-2xl tracking-wider">{title}</h3>
        <p className="pb-4 pt-2">{type}</p>
        <section className="flex gap-4 mb-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex gap-4 items-center bg-indigo-700 hover:bg-indigo-600 py-2 px-4 rounded-md justify-center"
            href={githubLink}
          >
            <BsCodeSquare size={30} />
            <span className="text-[16px]">Code</span>
          </a>
          {demo ? (
            <a
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 items-center bg-amber-500 hover:bg-amber-400 py-2 px-4 rounded-md justify-center"
              href={demoLink}
            >
              <BsLink45Deg size={30} />
              <span className="text-[16px]">Demo</span>
            </a>
          ) : (
            <span className="flex gap-4 items-center bg-gray-500 hover:bg-gray-400 py-2 px-4 rounded-md justify-center">
              <BsLink45Deg size={30} />
              <span className="text-[16px]">Demo</span>
            </span>
          )}
        </section>

        <Link href={href}>
          <p className="py-4 rounded-lg bg-white/90 text-gray-800 font-bold text-lg cursor-pointer hover:bg-white">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
