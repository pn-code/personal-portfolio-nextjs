import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="w-full text-center mb-5">
            <div className="flex justify-center gap-4 max-w-[330px] m-auto py-4 pt-8">
                <a
                    href="https://www.linkedin.com/in/pncode"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer hover:scale-150 ease-in duration-300">
                        <FaLinkedinIn size={24} color="black" />
                    </div>
                </a>

                <a
                    href="https://github.com/pn-code"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer hover:scale-150 ease-in duration-300">
                        <FaGithub size={24} color="black" />
                    </div>
                </a>

                <a
                    href="mailto:philipnguyen953@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer hover:scale-150 ease-in duration-300">
                        <AiOutlineMail size={24} color="black" />
                    </div>
                </a>
            </div>
        </footer>
    );
}
