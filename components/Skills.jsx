import React from "react";
import Image from "next/image";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png";
import jsLogo from "../public/assets/skills/javascript.png";
import reactLogo from "../public/assets/skills/react.png";
import firebaseLogo from "../public/assets/skills/firebase.png";
import nodeLogo from "../public/assets/skills/node.png";
import expressLogo from "../public/assets/skills/express.png";
import nextLogo from "../public/assets/skills/nextjs.png";
import mongoLogo from "../public/assets/skills/mongo.png";
import tailwindLogo from "../public/assets/skills/tailwind.png";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center sm:items-start">
        <p className="text-xl tracking-widest uppercase text-accent font-bold">
          Skills
        </p>
        <header className="w-full flex flex-col justify-between items-center sm:flex-row">
          <h2 className="py-4">What I Can Do</h2>
          <a
            className="bg-secondaryBtn py-2 px-4 rounded-md flex gap-4 font-semibold h-10 mt-5 border-b-4 hover:border-b-accent text-secondary"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <BsFillPersonLinesFill size={24} color="black" />
            <span>My Resume</span>
          </a>
        </header>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 py-8 rounded-lg">
          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlLogo} width={32} height={32} alt="HTML" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">HTML</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssLogo} width={32} height={32} alt="CSS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">CSS</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsLogo} width={32} height={32} alt="JavaScript" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactLogo} width={32} height={32} alt="React" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">React</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={firebaseLogo}
                  width={32}
                  height={32}
                  alt="Firebase"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">Firebase</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodeLogo} width={32} height={32} alt="node" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">Node</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="z-[100]"
                  src={nextLogo}
                  width={32}
                  height={32}
                  alt="NextJS"
                  color="white"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">NextJS</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongoLogo} width={32} height={32} alt="mongo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-2 shadow-xl bg-secondaryBtn rounded-xl px-4 hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwindLogo}
                  width={32}
                  height={32}
                  alt="tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-2 px-4 shadow-xl bg-secondaryBtn rounded-xl hover:scale-110 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={expressLogo} width={32} height={32} alt="express" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm text-secondary">Express</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
