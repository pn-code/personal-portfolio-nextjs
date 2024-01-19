import WebAnimation from "../animations/WebAnimation";
import { Button } from "../ui/button";

const Main = () => {
    return (
        <div
            id="#"
            className="px-1.5 text-center md:text-left w-full min-h-[100vh] h-full flex flex-col md:flex-row items-center md:gap-20 py-20 md:pt-32 animate-fadeIn md:px-[8%]"
        >
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 flex-1">
                <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter">
                    Transform your vision into reality
                </h1>
                <h2 className="text-lg md:text-2xl tracking-tighter text-slate-600">
                    Creating software solutions that intrigues and inspires.
                    Fast and meticulous learner who strives for continuous
                    improvement. Let&apos;s connect and work together on your
                    next project!
                </h2>
                <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>
                <div className="flex gap-4 w-full">
                    <a className="w-full" href="#about">
                        <Button className="text-lg py-6 md:p-6 w-full">
                            About Me
                        </Button>
                    </a>
                    <a
                        className="w-full"
                        href="#contact"
                    >
                        <Button
                            className="text-lg py-6 md:p-6 w-full"
                            variant="outline"
                        >
                            Get In Touch
                        </Button>
                    </a>
                </div>
            </div>

            <div className="flex-1 hidden md:flex">
                <WebAnimation />
            </div>
        </div>
    );
};

export default Main;
