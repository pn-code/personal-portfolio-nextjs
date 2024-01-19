import Image from "next/image";
import { Button } from "../ui/button";
import ProfileImg from "@/public/assets/profile.png";

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:px-[8%] px-1.5 py-12 md:py-24 bg-slate-200"
        >
            <div className="w-full h-full mx-auto flex flex-col md:flex-row gap-4 md:gap-24">
                <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center">
                    <h1 className="md:text-5xl text-4xl text-primary font-semibold tracking-tighter mb-4 text-center md:text-left">
                        About Me
                    </h1>

                    <p className="text-lg md:text-xl text-primary text-left rounded-md tracking-tight max-w-[800px]">
                        I&apos;m{" "}
                        <span className="font-semibold text-blue-600">
                            Philip Nguyen
                        </span>
                        , a Software Engineer with expertise in front-end and
                        back-end technologies. I transform innovative ideas into
                        impactful software.
                        <br />
                        <br />
                        My{" "}
                        <span className="text-blue-600 font-semibold">
                            unwavering commitment to learning
                        </span>{" "}
                        drives me to continually explore new technologies and
                        master existing tools. I believe in the power of{" "}
                        <span className="text-blue-600 font-semibold">
                            diligence and attention to detail to deliver
                            exceptional results
                        </span>
                        .
                        <br />
                        <br />

                        <Button
                            className="tracking-tighter font-bold text-lg md:text-xl justify-start text-left p-0 underline hover:text-blue-600 duration-200"
                            variant="link"
                        >
                            <a href="#footer">
                                Let&apos;s collaborate and create something
                                remarkable.
                            </a>
                        </Button>
                    </p>
                </div>
                <Image
                    className="rounded-full"
                    src={ProfileImg}
                    alt="Philip's portrait image"
                    width={600}
                />
            </div>
        </div>
    );
};

export default About;
