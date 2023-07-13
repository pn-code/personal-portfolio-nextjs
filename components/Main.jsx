import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Main = () => {
    return (
        <div className="w-full h-screen text-center custom-bg">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="flex rounded-md bg-gray-900/90 px-10 py-16 gap-10 flex-col items-center sm:flex-row sm:items-start">
                    <Image className="rounded-md" src="/assets/profile.png" alt="Philip Nguyen Profile Picture" width={220} height={100}/>
                    <div className="text-primary">
                        <h1 className="py-4 text-accent">Philip Nguyen</h1>
                        <h2 className="py-4">Software Engineer</h2>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pt-8">
                            <a
                                href="https://www.linkedin.com/in/pncode"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                    <FaLinkedinIn size={24} color="black" />
                                </div>
                            </a>

                            <a
                                href="https://github.com/pn-code"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                    <FaGithub size={24} color="black" />
                                </div>
                            </a>

                            <a
                                href="mailto:philipnguyen953@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                    <AiOutlineMail size={24} color="black" />
                                </div>
                            </a>

                            <a
                                href="/assets/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="rounded-full shadow-lg bg-secondaryBtn shadow-gray-900 p-4 cursor-pointer hover:scale-150 ease-in duration-300">
                                    <BsFillPersonLinesFill
                                        size={24}
                                        color="black"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
