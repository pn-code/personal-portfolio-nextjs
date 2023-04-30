import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import navLogo from ".//../public/assets/navLogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#181818");
    const [linkColor, setLinkColor] = useState("ghostwhite");
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === "/sample_project") {
            setNavBg("#181818");
            setLinkColor("ghostwhite");
        } else {
            setNavBg("#181818");
            setLinkColor("ghostwhite");
        }
    }, [router.asPath]);

    const handleNav = () => {
        setNav((prevNav) => !prevNav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    });

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100]"
                    : "fixed w-full h-20 z-[100]"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                <Link className="text-2xl font-semibold" href="/">
                    Philip Nguyen
                </Link>

                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex"
                    >
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
                        <li className="navLink">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>

                    <div
                        className="md:hidden cursor-pointer"
                        onClick={handleNav}
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-800 p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <h1>Philip Nguyen</h1>
                            <div
                                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer bg-gray-300"
                                onClick={handleNav}
                            >
                                <AiOutlineClose color="black"/>
                            </div>
                        </div>

                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm font-semibold"
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#about">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm font-semibold"
                                    >
                                        About
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm font-semibold"
                                    >
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm font-semibold"
                                    >
                                        Projects
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm font-semibold"
                                    >
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#4b6bc5]">
                                    Let&apos;s Connect
                                </p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a
                                            href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a
                                            href="https://github.com/pn-code"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a
                                            href=""
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <AiOutlineMail />
                                        </a>
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <a
                                            href="/resume"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <BsFillPersonLinesFill />
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
