import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#f6f6f6");
    const [linkColor, setLinkColor] = useState("black");
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === "/sample_project") {
            setNavBg("transparent");
            setLinkColor("#f6f6f6");
        } else {
            setNavBg("#f6f6f6");
            setLinkColor("black");
        }
    }, []);

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
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image
                        src="/../public/assets/navLogo.png"
                        alt=""
                        width="100"
                        height="50"
                    />
                </Link>

                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex"
                    >
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#projects">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>

                    <div className="md:hidden" onClick={handleNav}>
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
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[white] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src="/../public/assets/navLogo.png"
                                alt=""
                                width="90"
                                height="40"
                            />
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                                onClick={handleNav}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let's build something together!
                            </p>
                        </div>

                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm "
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#about">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        About
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Projects
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li
                                        onClick={() => setNav(false)}
                                        className="py-4 text-sm"
                                    >
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#4b6bc5]">
                                    Let's Connect
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
