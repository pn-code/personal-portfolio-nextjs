import ProjectCard from "./ProjectCard";

const allProjects = [
  {
    id: 1,
    title: "FitHeroes",
    githubLink: "https://github.com/pn-code/fitheroes",
    demo: "https://fitheroes.philipnguyen.dev",
    description:
      "FitHeroes is a powerful fitness app that helps you track your progress, plan your workouts, and achieve your fitness goals. It provides a variety of features including a detailed calorie calculator, weight and body fat tracker, nutrition and exercise journals, and the ability to build, view, and save workout plans.",
    skills: ["Next.js", "React", "PlanetScale", "TailwindCSS", "Zod", "Prisma"],
    imageSrc: "/assets/projects/fitheroes-img.jpg",
  },
  {
    id: 2,
    title: "Monster Burger: A Restaurant App",
    githubLink: "https://github.com/pn-code/restaurant-app",
    demo: "https://restaurant.philipnguyen.dev",
    description:
      "The Restaurant App is a full-stack web application built with Next.js, React, Redux, MongoDB, and TailwindCSS. It offers a user-friendly interface for customers to browse the menu, customize orders with add-ons and combos, manage their cart, place orders (PayPal or cash), and track order status. Admins can access the dashboard to process orders and update details.",
    skills: ["Next.js", "React", "TailwindCSS", "MongoDB", "Redux"],
    imageSrc: "/assets/projects/monsterburger-img.png",
  },
  {
    id: 3,
    title: "Bug Tracker",
    githubLink: "https://github.com/pn-code/bug-tracker",
    demo: "https://bug-tracker-blue.vercel.app/",
    description:
      "The Bug Tracker is a Next.js project designed to keep track of bugs and monitor progress made towards fixing them across multiple projects. It provides a user-friendly interface for managing projects, tracking issues, and facilitating communication among team members.",
    skills: ["Next.js", "React", "TailwindCSS", "PostgreSQL"],
    imageSrc: "/assets/projects/bugtracker-img.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full mt-28 mb-10 px-2">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full sm:items-start">
        <header className="w-full flex flex-col justify-between items-center sm:items-start">
          <h1 className="text-xl tracking-widest uppercase text-accent font-bold">
            Projects
          </h1>
          <h2 className="py-4">What I&apos;ve Built</h2>
        </header>

        <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Projects;
