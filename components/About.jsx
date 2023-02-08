import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16 text-lg"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="max-w-[560px] col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#3855b6] font-semibold">
                        About
                    </p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-700">
                        I am a motivated, self-starter who loves to learn and
                        apply himself.
                    </p>
                    <p className="py-2 text-gray-700">
                        Outside of development, I am passionate about fitness
                        and love spending time with my friends and family.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-zinc-900 underline cursor-pointer">
                            Check out some of my latest projects
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
                    <Image
                        src="/../public/assets/profile.jpg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
