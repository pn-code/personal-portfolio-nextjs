import WebAnimation from "../animations/WebAnimation";

const Main = () => {
    return (
        <div
            id="#"
            className="px-4 w-full min-h-[100vh] h-full text-center flex items-center justify-center pt-32 animate-fadeIn"
        >
            <div className="flex flex-col gap-2 sm:gap-4">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter">
                    Philip Nguyen
                </h1>
                <h2 className="text-3xl tracking-tight text-blue-600 dark:text-blue-400 font-semibold">
                    Software Engineer
                </h2>
                <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>
                <p className="opacity-90 text-center">
                    Passionate about writing software solutions that enrich
                    lives and inspire lasting change.
                </p>
                <WebAnimation />
            </div>
        </div>
    );
};

export default Main;
