import WebAnimation from "../animations/WebAnimation";

const Main = () => {
    return (
        <div
            id="#"
            className="px-4 w-full min-h-[100vh] text-center flex items-center justify-center pt-28"
        >
            <div className="flex flex-col gap-2 sm:gap-4">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    Philip Nguyen
                </h1>
                <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold">
                    Software Engineer
                </h2>
                <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>
                <p className="opacity-90 text-sm sm:text-[16px] text-center">
                    Passionate about writing software solutions that enrich
                    lives and inspire lasting change.
                </p>
                <WebAnimation />
            </div>
        </div>
    );
};

export default Main;
