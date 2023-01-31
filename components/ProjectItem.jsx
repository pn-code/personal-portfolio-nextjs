import React from "react";
import Link from "next/link";

const ProjectItem = (props) => {
    const { title, type, imgSrc, imgAlt, href } = props;

    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#197cd8] to-[#273ea7]">
            <img
                className="rounded-xl group-hover:opacity-10"
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
                <h3 className="text-2xl tracking-wider">{title}</h3>
                <p className="pb-4 pt-2">{type}</p>
                <Link href={href}>
                    <p className="py-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
