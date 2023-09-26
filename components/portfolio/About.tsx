const About = () => {
    return (
        <div id="about" className="w-full h-[calc(100vh-130px)] sm:px-[20%] px-4">
            <div className="max-w-[1240px] w-full h-full mx-auto flex">
                <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center">
                    <h1 className="text-xl text-primary font-bold text-center">
                        About Me
                    </h1>
                    <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>

                    <p className="text-sm sm:text-lg text-primary text-left rounded-md">
                        I&apos;m Philip Nguyen, a passionate Software Engineer
                        with experience working on front-end and back-end
                        technologies. I enjoy designing and developing
                        high-quality software products that create a positive
                        and lasting impact on people&apos;s lives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
