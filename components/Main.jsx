import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-800">
                        Hi, I'm {" "}
                        <span className="text-[#3855b6]">Philip Nguyen</span>,
                    </h1>
                    <h2 className="py-4 text-gray-800">
                        A Full-Stack Web Developer
                    </h2>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pt-8">
                        <a
                            href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <FaLinkedinIn />
                            </div>
                        </a>

                        <a
                            href="https://github.com/pn-code"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <FaGithub />
                            </div>
                        </a>

                        <a
                            href="mailto:philipnguyen953@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <AiOutlineMail />
                            </div>
                        </a>

                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
