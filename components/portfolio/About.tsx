import { Button } from "../ui/button";

const About = () => {
  return (
    <div id="about" className="w-full h-[calc(100vh-130px)] sm:px-[20%] px-4 mt-8">
      <div className="max-w-[1240px] w-full h-full mx-auto flex">
        <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center">
          <h1 className="text-2xl md:text-4xl text-primary font-bold text-center tracking-tight">
            About Me
          </h1>

          <p className="text-lg text-primary text-left rounded-md px-4">
            I&apos;m{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Philip Nguyen
            </span>
            , a Software Engineer passionate about crafting digital solutions.
            With expertise in both front-end and back-end technologies, I
            transform innovative ideas into impactful software.
            <br />
            <br />
            My{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              unwavering commitment to learning
            </span>{" "}
            drives me to continually explore new technologies and master
            existing tools. I believe in the power of{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              diligence and attention to detail to deliver exceptional results
            </span>
            .
            <br />
            <br />
            <Button className="text-amber-500 dark:text-amber-400 italic font-bold text-lg justify-start text-left p-0" variant="link">
              <a href="#footer">
                Let&apos;s collaborate and create something remarkable.
              </a>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
