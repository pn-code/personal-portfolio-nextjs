import React from "react";
import ProjectItem from "./ProjectItem";
import fitnessPreview from "../public/assets/projects/fitness-plans.png"
import fitmobilePreview from "../public/assets/projects/fitmobile-preview.jpg"
import restaurantPreview from "../public/assets/projects/restaurant-menu.png"
import igClonePreview from "../public/assets/projects/ig-preview.png"

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#3855b6] font-semibold">
                    Projects
                </p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Add Latest Projects Here... */}
                    <ProjectItem
                        title="Fitness App"
                        type="ReactJS / MERN Stack"
                        imgSrc={fitnessPreview}
                        imgAlt="/"
                        href="/fitness"
                    />
                    <ProjectItem
                        title="Fitness Mobile"
                        type="React Native / Firebase"
                        imgSrc={fitmobilePreview}
                        imgAlt="/"
                        href="/fitmobile"
                    />
                    <ProjectItem
                        title="Restaurant App"
                        type="NextJS"
                        imgSrc={restaurantPreview}
                        imgAlt="/"
                        href="/restaurant"
                    />
                    <ProjectItem
                        title="Instagram Clone"
                        type="React / MERN Stack"
                        imgSrc={igClonePreview}
                        imgAlt="/"
                        href="/igclone"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
