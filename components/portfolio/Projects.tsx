import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    id: 1,
    title: "FitHeroes",
    githubLink: "https://github.com/pn-code/fitheroes",
    demo: "https://fitheroes.philipnguyen.dev",
    description:
      "FitHeroes is a powerful fitness app that helps you track your progress, plan your workouts, and achieve your fitness goals. It provides a variety of features including a detailed calorie calculator, weight and body fat tracker, nutrition and exercise journals, and the ability to build, view, and save workout plans.",
    skills: ["TypeScript", "React (Next.js)", "Node", "MySQL"],
    imageSrc: "/assets/projects/fitheroes.jpg",
  },
  {
    id: 2,
    title: "Monster Burger",
    githubLink: "https://github.com/pn-code/restaurant-app",
    demo: "https://restaurant.philipnguyen.dev",
    description:
      "Monster Burger is a restaurant web app which offers a user-friendly interface for customers to browse the menu, customize orders with add-ons and combos, manage their cart, place orders (PayPal or cash), and track order status. Admins can access the dashboard to process orders and update details.",
    skills: ["JavaScript", "React (Next.js)", "Redux", "Node", "MongoDB"],
    imageSrc: "/assets/projects/monsterburger.png",
  },
  {
    id: 3,
    title: "Bug Tracker",
    githubLink: "https://github.com/pn-code/bug-tracker",
    demo: "https://bug-tracker-blue.vercel.app/",
    description:
      "The Bug Tracker is designed to keep track of bugs and monitor progress made towards fixing them across multiple projects. It provides a user-friendly interface for managing projects, tracking issues, and facilitating communication among team members.",
    skills: ["JavaScript", "React (Next.js)", "Node", "PostgreSQL"],
    imageSrc: "/assets/projects/bug.jpg",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-full sm:px-[20%] mb-10 pt-10 flex flex-col gap-4"
    >
      <div className="flex flex-col h-full">
        <h1 className="text-xl text-primary font-bold text-center mb-5">
          Projects
        </h1>
        <span className="border-b-primaryBtn border-b-2 sm:border-b-4"></span>
        <div className="w-full flex flex-col gap-12 mt-5">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              skills={project.skills}
              githubLink={project.githubLink}
              demo={project.demo}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Button>
          <a href="https://github.com/pn-code" target="_blank" rel="noreferrer">
            View Other Projects
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
