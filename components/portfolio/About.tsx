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
            I&apos;m{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">Philip Nguyen</span>
            , a Software Engineer passionate about crafting digital solutions.
            With expertise in both front-end and back-end technologies, I
            transform innovative ideas into impactful software.
            <br />
            <br />
            My <span className="text-indigo-600 dark:text-indigo-400">unwavering commitment to learning</span> drives me to continually
            explore new technologies and master existing tools. I believe in the
            power of <span className="text-indigo-600 dark:text-indigo-400">diligence and attention to detail to deliver exceptional
            results</span>.
            <br />
            <br />
            Let&apos;s collaborate and create something remarkable.{" "}
            <a className="text-blue-600 font-bold dark:text-blue-400 hover:underline" href="#projects">Explore my projects</a> or{" "}
            <a className="text-blue-600 font-bold dark:text-blue-400 hover:underline" href="#footer">connect with me</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
