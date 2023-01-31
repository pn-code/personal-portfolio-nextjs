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
                        title="Restaurant App"
                        type="NextJS"
                        imgSrc="https://raw.githubusercontent.com/pn-code/restaurant-app/main/gh/menu.png"
                        imgAlt="/"
                        href="/"
                    />
                    <ProjectItem
                        title="Instagram Clone"
                        type="React / MERN Stack"
                        imgSrc="https://raw.githubusercontent.com/pn-code/ig-clone/main/gh-preview/ig-clone-preview-1.png"
                        imgAlt="/"
                        href="/"
                    />
                    <ProjectItem
                        title="Fitness Mobile"
                        type="React Native / Firebase"
                        imgSrc="https://raw.githubusercontent.com/pn-code/fitness-mobile/main/github/journal_screen.jpg"
                        imgAlt="/"
                        href="/"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
