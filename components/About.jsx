const About = () => {
  return (
    <div id="about" className="w-full h-[calc(100vh-130px)] mt-28">
      <div className="max-w-[1240px] w-full h-full mx-auto flex">
        <div className="w-full flex flex-col gap-4 sm:items-start">
          <header className="w-full flex flex-col justify-between items-center sm:items-start">
            <h1 className="text-xl tracking-widest uppercase text-accent font-bold">
              About
            </h1>
            <h2 className="py-4">Who I Am</h2>
          </header>

          <p className="text-lg sm:text-xl text-primary text-center sm:text-left bg-gray-900/90 px-5 py-10 rounded-md">
            I am a passionate{" "}
            <span className="text-purple-300">Software Engineer</span> with
            experience in{" "}
            <span className="text-indigo-300">Full Stack Web Development</span>.
            <br />
            <br />
            While I have used many front-end and back-end technologies to build
            my projects, I am most familiar with{" "}
            <span className="text-amber-300">JavaScript</span>,{" "}
            <span className="text-green-300">Node.js</span>,{" "}
            <span className="text-blue-300">React</span>, and{" "}
            <span className="text-gray-300">Next.js. </span>
            <br />
            <br />I am looking to create{" "}
            <span className="text-amber-300">high-quality</span> software
            products that make a{" "}
            <span className="text-green-300">positive and lasting impact</span>{" "}
            on people&apos;s lives. If you are in search of a{" "}
            <span className="text-blue-300">dedicated </span>
            and <span className="text-indigo-300">self-motivated </span>
            software developer,{" "}
            <span className="text-purple-300">who loves learning </span>
            look no further.
            <br />
            <br />
            In addition to my work in software engineering, I have a deep
            passion for fitness and enjoy spending quality time with my friends
            and family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
