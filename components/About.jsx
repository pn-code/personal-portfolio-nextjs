import React from "react";
import Link from "next/link";
import Image from "next/image";
import workImage from "../public/assets/work.jpg"

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen p-2 flex flex-col lg:flex-row py-16 text-lg gap-12">
      <div className="w-full flex justify-between flex-1">
        <div className="w-full flex flex-col gap-4 items-center justify-center sm:items-start">
          <p className="uppercase text-xl tracking-widest text-accent font-bold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-lg text-primary">
            I am a passionate Software Engineer with experience in full stack
            web development. My goal is to create high-quality software products
            that make a positive and lasting impact on people's lives.
            <br />
            <br />
            In addition to my work in software engineering, I have a deep
            passion for fitness and enjoy spending quality time with my friends
            and family.
            <br />
            <br />
            If you are in search of a dedicated and self-motivated software
            developer who loves learning, look no further.
          </p>

          <Link className="w-full sm:w-[180px] text-center" href="/#projects">
            <p className="my-5 w-full text-xl font-semibold sm:text-lg sm:font-thin sm:w-[180px] px-4 py-2 bg-primaryBtn hover:bg-secondaryBtn ease-in duration-200 hover:text-primaryBtn rounded-lg hover:text-secondary-btn">
              View My Projects
            </p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-md">
        <Image className="rounded-md" src={workImage} height={500} width={500} alt="work image"/>
      </div>
    </div>
  );
};

export default About;
