import { BsFillPersonLinesFill } from "react-icons/bs";
import SkillCard from "./SkillCard";

const Skills = () => {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Next.js",
  ];
  const backEndSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "SQL"
  ];
  const tools = [
    "Git",
    "VSCode",
    "GitHub",
    "Postman",
    "Prisma",
    "Vercel",
    "PlanetScale"
  ];
  const otherSkills = ["RESTful API", "TRPC", "GraphQL", "MVC Architecture", "Zod"];

  return (
    <div id="skills" className="w-full h-[calc(100vh-130px)] mt-28">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full sm:items-start">
        <header className="w-full flex flex-col justify-between items-center sm:items-start">
          <h1 className="text-xl tracking-widest uppercase text-accent font-bold">
            Skills
          </h1>
          <h2 className="py-4">What I Can Do</h2>
        </header>

        {/* All Skills Section */}
        <section className="flex flex-col gap-4 mt-5">
          <section>
            <h3 className="text-lg mb-2">Frontend Skills</h3>
            <div className="flex gap-4 flex-wrap">
              {frontEndSkills.map((skill) => (
                <SkillCard skillName={skill} key={skill} />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg mb-2">Backend Skills</h3>
            <div className="flex gap-4 flex-wrap">
              {backEndSkills.map((skill) => (
                <SkillCard skillName={skill} key={skill} />
              ))}
            </div>
          </section>

          {/* Tools */}
          <section>
            <h3 className="text-lg mb-2">Tools</h3>
            <div className="flex gap-4 flex-wrap">
              {tools.map((skill) => (
                <SkillCard skillName={skill} key={skill} />
              ))}
            </div>
          </section>

          {/* Other Skills */}
          <section>
            <h3 className="text-lg mb-2">Other Skills</h3>
            <div className="flex gap-4 flex-wrap">
              {otherSkills.map((skill) => (
                <SkillCard skillName={skill} key={skill} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Skills;
