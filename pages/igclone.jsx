import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import overviewImg from "../public/assets/projects/ig-logo.png"
import previewImg from "../public/assets/projects/ig-preview.png"

const Igclone = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={overviewImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">IG Clone</h2>
                    <h3>ReactJS / MERN Stack</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>IG Clone</p>
                    <h2 className="mb-5">Overview</h2>
                    <p className="mb-5">
                        An igclone app intended to mimic the appearance and
                        functionalities of the popular social media app,
                        Instagram.
                        <br />
                        <br />
                        Users can register, login, log out, create posts (post
                        image and captions), like posts, and comment on posts.
                    </p>
                    {/* Display Images */}
                    <div className="flex flex-col gap-4 mb-5">
                        <Image
                            src={previewImg}
                            alt="/"
                            width={900}
                            height={900}
                        />
                    </div>
                    <a
                        href="https://github.com/pn-code/ig-clone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="https://ig.philipnguyen.dev" target="_blank" rel="noreferrer">
                        <button className="px-8 py-2 mt-4">Demo</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 px-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> ReactJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> MongoDB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                NodeJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> Express
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> Tailwind
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default Igclone;
