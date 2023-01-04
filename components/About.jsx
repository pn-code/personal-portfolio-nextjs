import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#3855b6]">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I'm a Full-Stack Web Developer.
                    </p>
                    <p className="py-2 text-gray-600">
                        I am a motivated, self-starter who loves to learn and
                        apply myself. I am capable of making projects related to
                        the MERN stack, and would love to learn new technologies
                        if granted the opportunity.
                    </p>
                    <p className="py-2 text-gray-600">
                        Outside of development, I enjoy spending time with my
                        family, exercising, and reading.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
                    <Image
                        src="/../public/assets/profile.jpg"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
