import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-50">
                        Hi, I&apos;m {" "}
                        <span className="text-indigo-600">Philip Nguyen,</span>
                    </h1>
                    <h2 className="py-4 text-gray-50">
                        A Full-Stack Web Developer
                    </h2>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pt-8">
                        <a
                            href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg bg-gray-200 shadow-gray-700 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <FaLinkedinIn size={24} color="black"/>
                            </div>
                        </a>

                        <a
                            href="https://github.com/pn-code"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg bg-gray-200 shadow-gray-700 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <FaGithub size={24} color="black"/>
                            </div>
                        </a>

                        <a
                            href="mailto:philipnguyen953@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg bg-gray-200 shadow-gray-700 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <AiOutlineMail size={24} color="black"/>
                            </div>
                        </a>

                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg bg-gray-300 shadow-gray-700 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <BsFillPersonLinesFill size={24} color="black"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
