import React from "react";
import ProjectItem from "./ProjectItem";
import sampleProject from "../public/assets/skills/html.png";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#3855b6]">
                    Projects
                </p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="Sample Project"
                        type="React"
                        imgSrc={sampleProject}
                        imgAlt="/"
                        href="/"
                    />
                    <ProjectItem
                        title="Sample Project"
                        type="React"
                        imgSrc={sampleProject}
                        imgAlt="/"
                        href="/"
                    />
                    <ProjectItem
                        title="Sample Project"
                        type="React"
                        imgSrc={sampleProject}
                        imgAlt="/"
                        href="/"
                    />
                    <ProjectItem
                        title="Sample Project"
                        type="React"
                        imgSrc={sampleProject}
                        imgAlt="/"
                        href="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
