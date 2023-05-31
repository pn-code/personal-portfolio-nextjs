import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiFillAlert,
  AiFillFire,
  AiFillThunderbolt,
  AiFillMessage,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-secondary">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link
          className="text-xl font-semibold flex gap-4 items-center"
          href="/"
        >
          <h1 className="text-2xl font-lexend font-[500] border-b-4 border-b-transparent hover:border-b-accent ease-linear duration-200 mt-">
            Philip Nguyen
          </h1>
        </Link>

        <div>
          <ul className="hidden lg:flex lg:items-center">
            <li className="navLink">
              <Link href="/about">About</Link>
            </li>
            <li className="navLink">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="navLink">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="bg-accent/90 px-3 py-2 rounded-sm border-4 border-transparent hover:bg-accent/70 font-bold ml-7 ease-in-out duration-300 mb-2">
              <Link href="/contact">CONTACT ME</Link>
            </li>
            <li className="hover:bg-gray-700/90 px-3 py-[10px] rounded-sm border-2 font-bold ml-7 ease-in-out duration-300 mb-2">
              <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
                RESUME
              </a>
            </li>
          </ul>

          <div className="lg:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full sm:w-[60%] lg:w-[45%] h-screen bg-secondary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-4 items-center">
                <Link href="/" onClick={() => setNav(false)}><h1 className="text-3xl lexend font-[500] hover:text-accent">Philip Nguyen</h1></Link>
              </div>

              <div
                className="rounded-full p-3 cursor-pointer bg-primary hover:bg-gray-300"
                onClick={handleNav}
              >
                <AiOutlineClose color="black" />
              </div>
            </div>

            <div className="py-4 flex flex-col mt-[8%]">
              <ul className="uppercase">
                <Link href="/about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillAlert size={22} color="white" />
                    About
                  </li>
                </Link>
                <Link href="/skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillFire size={22} color="white" />
                    Skills
                  </li>
                </Link>
                <Link href="/projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillThunderbolt size={22} color="white" />
                    Projects
                  </li>
                </Link>
                <Link href="/contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillMessage size={22} color="white" />
                    Contact
                  </li>
                </Link>
                <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <BsFillPersonLinesFill size={22} color="white" />
                    Resume
                  </li>
                </a>
              </ul>
              <div className="pt-[20%]">
                <p className="uppercase tracking-widest text-accent font-semibold">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/pn-code/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={24} color="black" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a
                      href="https://github.com/pn-code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={24} color="black" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a href="" target="_blank" rel="noreferrer">
                      <AiOutlineMail size={24} color="black" />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a href="/resume" target="_blank" rel="noreferrer">
                      <BsFillPersonLinesFill size={24} color="black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
