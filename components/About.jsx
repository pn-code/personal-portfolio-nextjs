const About = () => {
  return (
    <div id="about" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center sm:justify-start">
        <div className="w-full flex flex-col gap-4 items-center justify-center sm:items-start">
          <p className="uppercase text-xl tracking-widest text-accent font-bold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-lg sm:text-xl text-primary text-center sm:text-left">
            I am <span className="text-accent">Philip Nguyen</span>, a
            passionate{" "}
            <span className="text-purple-300">Software Engineer</span> with
            experience in{" "}
            <span className="text-indigo-300">full stack web development</span>.
            <br />
            <br />I have used many front-end and back-end technologies, while
            building my projects. I am most familiar with{" "}
            <span className="text-amber-300">JavaScript</span>,{" "}
            <span className="text-green-300">Node.js</span>,{" "}
            <span className="text-blue-300">React</span>, and{" "}
            <span className="text-gray-300">Next.js. </span>
            <br />
            <br />I am looking to create{" "}
            <span className="text-amber-300">high-quality</span> software
            products that make a{" "}
            <span className="text-green-300">positive and lasting impact</span>{" "}
            on people's lives. If you are in search of a{" "}
            <span className="text-blue-300">dedicated{" "}</span>
            and{" "}
            <span className="text-indigo-300">self-motivated {" "}</span>
            software developer,{" "}
            <span className="text-purple-300">who loves learning{" "}</span>
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
