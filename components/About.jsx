const About = () => {
    return (
        <div id="about" className="w-full h-[calc(100vh-130px)] sm:px-[20%]">
            <div className="max-w-[1240px] w-full h-full mx-auto flex">
                <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center">
                    <h1 className="text-xl text-primary font-bold text-center">
                        My Portfolio
                    </h1>
                    <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>

                    <p className="text-sm sm:text-lg text-primary text-left rounded-md">
                        I’m a Software Engineer, who loves creating aesthetic,
                        functional, and responsive websites. I have a strong
                        understanding of{" "}
                        <span className="text-primaryBtn">
                            HTML, CSS, JavaScript/TypeScript, and SQL.
                        </span>{" "}
                        I have extensive experience building full-stack apps
                        with{" "}
                        <span className="text-primaryBtn">
                            React.js, Node.js, Next.js,
                        </span>{" "}
                        among other technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
