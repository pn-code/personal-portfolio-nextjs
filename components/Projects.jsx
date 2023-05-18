import React from "react";
import ProjectItem from "./ProjectItem";
import fitnessPreview from "../public/assets/projects/fitness-plans.png";
import fitmobilePreview from "../public/assets/projects/fitmobile-preview.jpg";
import restaurantPreview from "../public/assets/projects/restaurant-menu.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col items-center sm:items-start">
        <p className="text-xl tracking-widest uppercase text-accent font-bold">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Add Latest Projects Here... */}
          <ProjectItem
            title="Restaurant App"
            type="NextJS"
            imgSrc={restaurantPreview}
            imgAlt="/"
            href="/restaurant"
            githubLink="https://github.com/pn-code/restaurant-app"
            demoLink="https://restaurant.philipnguyen.dev/"
            demo={true}
          />
          <ProjectItem
            title="Fitness Mobile"
            type="React Native / Firebase"
            imgSrc={fitmobilePreview}
            imgAlt="/"
            href="/fitmobile"
            githubLink="https://github.com/pn-code/fitness-mobile"
            demoLink=""
            demo={false}
          />
          <ProjectItem
            title="Fitness App"
            type="ReactJS / MERN Stack"
            imgSrc={fitnessPreview}
            imgAlt="/"
            href="/fitness"
            githubLink="https://github.com/pn-code/fitness-app"
            demoLink="https://fitness.philipnguyen.dev/"
            demo={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
