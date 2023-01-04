import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let's build something together
                    </p>
                    <h1 className="py-4 text-gray-800">
                        Hi, I'm{" "}
                        <span className="text-[#3855b6]">Philip Nguyen</span>
                    </h1>
                    <h1 className="py-2 text-gray-800">
                        A Full-Stack Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a full-stack web developer specializing in building
                        exceptional digital experiences. Currently I am focused
                        on building aesthetic web applications with the perfect
                        blend of front-end and back-end technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-120 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
