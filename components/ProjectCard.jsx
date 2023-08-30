import Image from "next/image";
import { BsCodeSquare } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import SkillCard from "./SkillCard";

export default function ProjectCard({
    githubLink,
    demo,
    title,
    description,
    skills,
    imageSrc,
}) {
    return (
        <article className="w-full flex md:justify-between items-center flex-col md:flex-row justify-center gap-8 sm:shadow-lg sm:p-12 rounded-md">
            {/* Left Side */}
            <section className="flex flex-col gap-4 flex-[3]">
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm sm:text-[16px]">{description}</p>

                <section className="flex flex-col gap-2 text-[16px]">
                    <h4>Skills Used: </h4>
                    <section className="flex gap-2 flex-wrap">
                        {skills.map((skill) => (
                            <SkillCard skillName={skill} key={skill} />
                        ))}
                    </section>
                </section>
            </section>

            {/* Right Side */}
            <section className="flex flex-col justify-between h-full w-full flex-[1] items-center gap-4 mt-5 md:mt-0">
                <Image
                    className="rounded-md w-full"
                    src={imageSrc}
                    width={300}
                    height={300}
                    alt={`${title} image`}
                />
                <section className="flex gap-2 mb-2 w-full">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex gap-4 items-center bg-indigo-700 hover:bg-indigo-600 py-2 px-4 rounded-sm justify-center"
                        href={githubLink}
                    >
                        <BsCodeSquare size={30} color="white" />
                        <span className="text-[16px] text-secondary">Code</span>
                    </a>
                    {demo ? (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex gap-4 items-center bg-amber-500 hover:bg-amber-400 py-2 px-4 rounded-sm justify-center"
                            href={demo}
                        >
                            <BsLink45Deg size={30} color="white" />
                            <span className="text-[16px] text-secondary">
                                Demo
                            </span>
                        </a>
                    ) : (
                        <span className="flex gap-4 items-center bg-gray-500 hover:bg-gray-400 py-2 px-4 rounded-md justify-center">
                            <BsLink45Deg size={30} color="white" />
                            <span className="text-[16px] text-secondary">
                                Demo
                            </span>
                        </span>
                    )}
                </section>
            </section>
        </article>
    );
}
