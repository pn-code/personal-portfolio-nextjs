import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import profileImg from "../public/assets/profile.png";

// Icons
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessageError(false);
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
            setMessageSent(false);
            setMessageError(true);
        }
        setLoading(false);
    };

    const canSendMessage = [
        name,
        phoneNumber,
        email,
        subject,
        message.length >= 10,
    ].every(Boolean);

    return (
        <div
            id="contact"
            className="w-full h-[calc(100vh-90px)] mt-28 sm:mx-[11%]"
        >
            <div className="max-w-[1240px] mx-auto flex flex-col h-full items-center">
                <h1 className="text-xl text-primary font-bold sm:mb-4">
                    Contact Me
                </h1>

                <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
                    {messageSent && (
                        <span className="flex justify-center text-md font-semibold mt-2 py-1 bg-blue-500 rounded-sm text-white">
                            Message has been sent. Thank you.
                        </span>
                    )}
                    {messageError && (
                        <span className="flex justify-center text-md font-semibold mt-2 py-1 bg-red-500 rounded-sm text-white">
                            An error has occurred. Please send me an email
                            instead.
                        </span>
                    )}

                    <form className="p-4 rounded-md" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-2 sm:gap-4 w-full py-2">
                            <div className="flex flex-col py-2">
                                <label
                                    className="uppercase text-sm py-2"
                                    htmlFor="name"
                                >
                                    Name:
                                </label>
                                <input
                                    className="border-2 rounded-sm p-1 flex border-gray-300 text-black"
                                    id="name"
                                    minLength={3}
                                    maxLength={30}
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span className="text-xs text-gray-800 pt-2 p-1">
                                    At least 3 characters but less than 30
                                </span>
                            </div>

                            <div className="flex flex-col py-2">
                                <label
                                    className="uppercase text-sm py-2"
                                    htmlFor="phone_number"
                                >
                                    Phone Number:
                                </label>
                                <input
                                    className="border-2 rounded-sm p-1 flex border-gray-300 text-black"
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    minLength={10}
                                    maxLength={15}
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                />
                                <span className="text-xs text-gray-800 pt-2 p-1">
                                    Format: (123) 456-7890
                                </span>
                            </div>

                            <div className="flex flex-col py-2">
                                <label
                                    className="uppercase text-sm py-2"
                                    htmlFor="name"
                                >
                                    Email:
                                </label>
                                <input
                                    className="border-2 rounded-sm p-1 flex border-gray-300 text-black"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    minLength={5}
                                    maxLength={40}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className="text-xs text-gray-800 pt-2 p-1">
                                    Enter a valid email
                                </span>
                            </div>

                            <div className="flex flex-col py-2">
                                <label
                                    className="uppercase text-sm py-2"
                                    htmlFor="subject"
                                >
                                    Subject
                                </label>
                                <input
                                    className="border-2 rounded-sm p-1 flex border-gray-300 text-black"
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    minLength={3}
                                    maxLength={30}
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <span className="text-xs text-gray-800 pt-2 p-1">
                                    More than 3 characters, but less than 30
                                </span>
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
                                className="border-2 rounded-sm p-1 flex border-gray-300 text-black resize-none"
                                rows={4}
                                id="message"
                                name="message"
                                placeholder="Message"
                                minLength={10}
                                maxLength={300}
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <span className="text-xs text-gray-800 pt-2 p-1">
                                Message should be more than 10 characters, but
                                less than 300.
                            </span>
                        </div>
                        <button
                            type="submit"
                            disabled={!canSendMessage | loading}
                            className="w-full p-4 text-gray-100 mt-4 disabled:cursor-not-allowed"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
