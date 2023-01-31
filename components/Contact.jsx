import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#3855b6]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left-side */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <Image
                                className="rounded-xl hover:scale-110 ease-in duration-300"
                                src="/../public/assets/skills/html.png"
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="py-2">Philip Nguyen</h2>
                                <p>Full-Stack Developer</p>
                                <p className="py-4">
                                    I am available for full-time positions.
                                    Contact me and let's talk.
                                </p>
                                <div>
                                    <p className="uppercase pt-8">
                                        Connect With Me
                                    </p>
                                    <div className="flex items-center justify-between py-4">
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                            <a
                                                href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaLinkedinIn />
                                            </a>
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                            <a
                                                href="https://github.com/pn-code"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                            <a
                                                href=""
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <AiOutlineMail />
                                            </a>
                                        </div>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
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

                    {/* Right-side */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col py-2">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="name"
                                        >
                                            Name:
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            id="name"
                                            name="name"
                                            type="text"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="phone_number"
                                        >
                                            Phone Number:
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            id="phone_number"
                                            name="phone_number"
                                            type="tel"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="name"
                                        >
                                            Email:
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            id="email"
                                            name="email"
                                            type="email"
                                        />
                                    </div>

                                    <div className="flex flex-col py-2">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="subject"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-400"
                                            id="subject"
                                            name="subject"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="message"
                                        >
                                            Message:
                                        </label>
                                        <textarea
                                            className="border-2 rounded-lg p-3 flex border-gray-400 resize-none"
                                            rows={10}
                                            id="message"
                                            name="message"
                                        ></textarea>
                                    </div>
                                <button className="w-full p-4 text-gray-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp
                                className="m-auto text-[#3855b6]"
                                size={30}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;