import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import itemImg from "../public/assets/projects/restaurant-item.png"
import mainImg from "../public/assets/projects/restaurant-main.png"
import menuImg from "../public/assets/projects/restaurant-menu.png"

const Restaurant = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={itemImg}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Restaurant App</h2>
                    <h3>NextJS / MongoDB</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Restaurant App</p>
                    <h2 className="mb-5">Overview</h2>
                    <p className="mb-5">
                        A restaurant app that allows online food orders.
                        <br />
                        <br />
                        Featuring an image slider, menu, footer, product page,
                        cart page, and order page where customers can choose
                        between one of two ways to checkout.
                        <br />
                        <br />
                        On top of that, there is a user login with admin
                        permission that will allow workers to access the admin
                        page, where the admin is able to keep track of products
                        and orders. Admins are also able to delete and progress
                        the status of orders.
                        <br />
                        <br />
                        Last, but not least, admins are also able to add new
                        products/menu items in the menu section of the app.
                    </p>
                    {/* Images Container */}
                    <div className="flex flex-col gap-4 mb-5">
                        <Image
                            width={800}
                            height={800}
                            src={mainImg}
                            alt="/"
                        />
                        <Image
                            width={800}
                            height={800}
                            src={menuImg}
                            alt="/"
                        />
                        <Image
                            width={800}
                            height={800}
                            objectFit="cover"
                            src={itemImg}
                            alt="/"
                        />
                    </div>
                    <a
                        href="https://github.com/pn-code/restaurant-app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Code</button>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
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
                                <RiRadioButtonFill className="pr-2" /> NextJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />
                                Tailwind
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" /> MongoDB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-2" />{" "}
                                JavaScript
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

export default Restaurant;
