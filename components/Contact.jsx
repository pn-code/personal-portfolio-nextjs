import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const post = {
            name,
            tele: phoneNumber,
            email,
            title: subject,
            body: message,
            date: new Date().toISOString(),
        };

        try {
            const res = await axios.post("/api/messages", post);
            if (res.data.success) {
                setMessageSent(true);

                setName("");
                setPhoneNumber("");
                setEmail("");
                setSubject("");
                setMessage("");
            }
        } catch (error) {
            setMessageError(true);
        }
        setLoading(false);
    };

    const canSendMessage = [name, phoneNumber, email, subject, message].every(
        Boolean
    );

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#3855b6] font-semibold">
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
                                alt=""
                            />
                            <div>
                                <h2 className="py-2">Philip Nguyen</h2>
                                <p className="font-semibold">
                                    Full-Stack Developer
                                </p>
                                <p className="py-4">
                                    I am available for full-time positions.
                                    Contact me and let&apos;s talk.
                                </p>
                                <div>
                                    <p className="uppercase pt-8 font-semibold">
                                        Connect With Me
                                    </p>
                                    <div className="flex items-center justify-between py-4">
                                        <a
                                            href="https://www.linkedin.com/in/philip-nguyen-92b6671b0/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                                <FaLinkedinIn size={24} />
                                            </div>
                                        </a>

                                        <a
                                            href="https://github.com/pn-code"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                                <FaGithub size={24} />
                                            </div>
                                        </a>

                                        <a
                                            href="mailto:philipnguyen953@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                                <AiOutlineMail size={24} />
                                            </div>
                                        </a>

                                        <a
                                            href="/assets/resume.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                                <BsFillPersonLinesFill
                                                    size={24}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right-side */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <h3 className="text-center text-2xl text-zinc-700 mt-5">
                            Contact Form
                        </h3>
                        {messageSent && (
                            <span className="flex justify-center text-md font-semibold mt-2 py-1 bg-blue-500 rounded-lg text-white">
                                Message has been sent. Thank you.
                            </span>
                        )}
                        {messageError && <span className="flex justify-center text-md font-semibold mt-2 py-1 bg-red-500 rounded-lg text-white">
                            An error has occurred. Please send me an email
                            instead.
                        </span>}
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
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
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
                                            value={phoneNumber}
                                            onChange={(e) =>
                                                setPhoneNumber(e.target.value)
                                            }
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
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
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
                                            value={subject}
                                            onChange={(e) =>
                                                setSubject(e.target.value)
                                            }
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
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={!canSendMessage | loading}
                                    className="w-full p-4 text-gray-100 mt-4 disabled:cursor-not-allowed"
                                >
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
