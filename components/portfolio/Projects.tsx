import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";

const allProjects = [
    {
        id: 5,
        title: "Titan Green",
        githubLink: "https://github.com/pn-code/boat",
        demo: "https://boat-one.vercel.app/",
        description:
            "Collaborated with several clients in the Engineering field to showcase their innovative Hydrogen Boat design. Designed and developed an engaging online platform spotlighting the fusion of advanced technology and eco-friendly marine engineering. Provided UI/UX adjustments which exceeded the web accessibility metrics outlined in phone call with the client.",
        skills: ["TypeScript", "React (Next.js)"],
        imageSrc: "/assets/projects/titan-green.jpg",
        role: "Front End Developer",
    },
    {
        id: 4,
        title: "Uncle Ben's",
        githubLink: "https://github.com/pn-code/ecommerce",
        demo: "https://shop.philipnguyen.dev/",
        description:
            "Uncle Ben's is an e-commerce web application featuring a variety of speciality meats. Featuring user authentication, shopping carts, Stripe integration, order tracking, and an admin application built underneath it all for the shop owner to track, create, update, and delete collections, products, billboards, and orders.",
        skills: ["TypeScript", "React (Next.js)", "Node", "PostgreSQL"],
        imageSrc: "/assets/projects/uncleben.jpg",
        role: "Full Stack Developer",
    },
    {
        id: 3,
        title: "FitHeroes",
        githubLink: "https://github.com/pn-code/fitheroes",
        demo: "https://fitheroes.philipnguyen.dev",
        description:
            "FitHeroes is a powerful fitness app that helps you track your progress, plan your workouts, and achieve your fitness goals. It provides a variety of features including a detailed calorie calculator, weight and body fat tracker, nutrition and exercise journals, and the ability to build, view, and save workout plans.",
        skills: ["TypeScript", "React (Next.js)", "Node", "MySQL"],
        imageSrc: "/assets/projects/fitheroes.jpg",
        role: "Full Stack Developer",
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
        role: "Full Stack Developer",
    },
    {
        id: 1,
        title: "Bug Tracker",
        githubLink: "https://github.com/pn-code/bug-tracker",
        demo: "https://bug-tracker-blue.vercel.app/",
        description:
            "The Bug Tracker is designed to keep track of bugs and monitor progress made towards fixing them across multiple projects. It provides a user-friendly interface for managing projects, tracking issues, and facilitating communication among team members.",
        skills: ["JavaScript", "React (Next.js)", "Node", "PostgreSQL"],
        imageSrc: "/assets/projects/bug.jpg",
        role: "Full Stack Developer",
    },
];

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-full h-full md:px-[8%] pt-12 md:py-24 flex flex-col gap-4 bg-slate-800 text-white px-1.5"
        >
            <div className="flex flex-col h-full">
                <header className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl md:text-5xl text-white font-semibold tracking-tight">
                        My Projects
                    </h1>
                    <a
                        className="flex tracking-tighter items-center gap-2 p-4 bg-slate-900 rounded-md duration-200 hover:bg-slate-900/70 hover:underline"
                        href=""
                    >
                        <Github size={18} />
                        View GitHub
                    </a>
                </header>

                <div className="w-full flex flex-col gap-12 mt-4">
                    {allProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                            githubLink={project.githubLink}
                            demo={project.demo}
                            imageSrc={project.imageSrc}
                            role={project.role}
                        />
                    ))}
                </div>
            </div>

            {/* <div className="w-full flex justify-center sm:justify-end">
        <Button>
          <a href="https://github.com/pn-code" target="_blank" rel="noreferrer">
            View Other Projects
          </a>
        </Button>
      </div> */}
        </div>
    );
};

export default Projects;
