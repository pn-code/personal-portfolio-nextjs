import { useState } from "react";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMail,
  AiFillHome,
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
        <Link className="text-xl font-semibold" href="/">
          Philip Nguyen
        </Link>

        <div>
          <ul className="hidden md:flex md:items-center">
            <li className="navLink">
              <Link href="/">Home</Link>
            </li>
            <li className="navLink">
              <Link href="/#about">About</Link>
            </li>
            <li className="navLink">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="navLink">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="bg-primaryBtn px-4 py-2 rounded-lg border-4 border-transparent hover:border-accent hover:bg-secondary font-bold ml-5 ease-in-out duration-300">
              <Link href="/#contact">Contact Me</Link>
            </li>
          </ul>

          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full sm:w-[60%] md:w-[45%] h-screen bg-secondary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-2xl">Philip Nguyen</h1>
              <div
                className="rounded-full p-3 cursor-pointer bg-primary hover:bg-gray-300"
                onClick={handleNav}
              >
                <AiOutlineClose color="black" />
              </div>
            </div>

            <div className="py-4 flex flex-col mt-[8%]">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillHome size={22} color="white"/>
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillAlert size={22} color="white"/>
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillFire size={22} color="white"/>
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillThunderbolt size={22} color="white"/>
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNav(false)}
                    className="py-4 text-xl font-semibold text-primary flex gap-4 items-center border-b-4 border-transparent hover:border-accent w-[160px]"
                  >
                    <AiFillMessage size={22} color="white"/>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-[20%]">
                <p className="uppercase tracking-widest text-accent font-semibold">
                  Let&apos;s Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div  className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/pn-code/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={24} color="black"/>
                    </a>
                  </div>
                  <div  className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a
                      href="https://github.com/pn-code"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={24} color="black"/>
                    </a>
                  </div>
                  <div  className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a href="" target="_blank" rel="noreferrer">
                      <AiOutlineMail size={24} color="black"/>
                    </a>
                  </div>
                  <div  className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                    <a href="/resume" target="_blank" rel="noreferrer">
                      <BsFillPersonLinesFill size={24} color="black"/>
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
