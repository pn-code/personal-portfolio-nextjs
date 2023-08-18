import SkillCard from "./SkillCard";

const Skills = () => {
  const languages = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL"
  ];

  const frameworks = [
    "Node.js",
    "Express.js",
    "React.js",
    "Next.js"
  ]

  const databases = [
    "MongoDB",
    "MySQL",
    "PostgreSQL"
  ]

  const tools = [
    "Git",
    "Postman",
    "Vercel",
    "Firebase",
    "Redux",
    "Jest",
    "Cypress",
    "Tailwind"
  ];

  const otherSkills = ["REST API", "TRPC", "GraphQL", "AGILE/SCRUM"];

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
                        <h3 className="text-lg mb-2">Programming Languages</h3>
                        <div className="flex gap-4 flex-wrap">
                            {languages.map((skill) => (
                                <SkillCard skillName={skill} key={skill} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg mb-2">Frameworks</h3>
                        <div className="flex gap-4 flex-wrap">
                            {frameworks.map((skill) => (
                                <SkillCard skillName={skill} key={skill} />
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg mb-2">Databases</h3>
                        <div className="flex gap-4 flex-wrap">
                            {databases.map((skill) => (
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
