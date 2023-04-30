import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import fitAuthImg from "../public/assets/projects/fit-auth.png";
import fitJournalImg from "../public/assets/projects/fit-journal.jpg";
import fitPlansImg from "../public/assets/projects/fit-plans.jpg";

const FitMobile = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={fitAuthImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Fitness Mobile</h2>
                    <h3>React Native / Firebase</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Fitness Mobile</p>
                    <h2 className="mb-5">Overview</h2>
                    <p className="mb-5">
                        A fitness app developed for mobile devices intended to
                        track workouts and create exercise plans.
                        <br />
                        <br />
                        Featuring user authentication, an exercise journal that
                        allows users to add and delete exercises, an exercise
                        planner that allows users to create, view, and/or add
                        exercise plans created by others.
                    </p>
                    <div className="flex flex-col gap-4 mb-5">
                        <Image
                            src={fitAuthImg}
                            alt="/"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={fitJournalImg}
                            alt="/"
                            width={500}
                            height={500}
                        />
                        <Image
                            src={fitPlansImg}
                            alt="/"
                            width={500}
                            height={500}
                        />
                    </div>
                    <a
                        href="https://github.com/pn-code/fitness-mobile"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    {/* <a href="" target="_blank" rel="noreferrer"> */}
                        <button className="px-8 py-2 mt-4">Demo (WIP)</button>
                    {/* </a> */}
                </div>
                <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-400 bg-gray-500 rounded-xl py-4 px-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> React
                                Native
                            </p>
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />{" "}
                                Javascript
                            </p>
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> Firebase
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

export default FitMobile;
