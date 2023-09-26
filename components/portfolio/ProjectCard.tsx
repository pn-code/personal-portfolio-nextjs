import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SkillCard from "./SkillCard";

import { Code, Rocket } from "lucide-react";

interface ProjectCardProps {
  githubLink: string;
  demo: string;
  title: string;
  description: string;
  skills: string[];
  imageSrc: string;
}

export default function ProjectCard({
  githubLink,
  demo,
  title,
  description,
  skills,
  imageSrc,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4">
        <Image src={imageSrc} alt={title} width={400} height={100} />

        <section className="w-full h-full flex flex-col gap-4 justify-between">
          <ul className="w-full md:w-[52] flex flex-col gap-2">
            {skills.map((skill: string) => (
              <li key={skill}>
                <SkillCard skillName={skill} />
              </li>
            ))}
          </ul>
          <section className="flex gap-2 mb-2 w-full justify-between mt-4 md:mt-0 md:justify-end">
            <a target="_blank" rel="noreferrer" href={githubLink}>
              <Button className="w-full flex gap-2" variant="outline">
                <Code />
                Code
              </Button>
            </a>
            <a target="_blank" rel="noreferrer" href={demo}>
              <Button className="w-full flex gap-2">
                <Rocket size={16} />
                Website
              </Button>
            </a>
          </section>
        </section>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
//  <article className="w-full flex md:justify-between items-center flex-col md:flex-row justify-center gap-8 sm:shadow-lg sm:p-12 rounded-md">
//       {/* Left Side */}
//       <section className="flex flex-col gap-4 flex-[3]">
//         <h3 className="text-xl">{title}</h3>
//         <p className="text-sm sm:text-[16px]">{description}</p>

//         <section className="flex flex-col gap-2 text-[16px]">
//           <h4>Skills Used: </h4>
//           <section className="flex gap-2 flex-wrap">
//             {skills.map((skill) => (
//               <SkillCard skillName={skill} key={skill} />
//             ))}
//           </section>
//         </section>
//       </section>

//       {/* Right Side */}
//       <section className="flex flex-col justify-between h-full w-full flex-[1] items-center gap-4 mt-5 md:mt-0">
//         <Image
//           className="rounded-md w-full"
//           src={imageSrc}
//           width={300}
//           height={300}
//           alt={`${title} image`}
//         />
//         <section className="flex gap-2 mb-2 w-full">
//           <a
//             target="_blank"
//             rel="noreferrer"
//             className="w-full flex gap-4 items-center bg-indigo-700 hover:bg-indigo-600 py-2 px-4 rounded-sm justify-center"
//             href={githubLink}
//           >
//             {/* <BsCodeSquare size={30} color="white" /> */}
//             <span className="text-[16px] text-secondary">Code</span>
//           </a>
//           {demo ? (
//             <a
//               target="_blank"
//               rel="noreferrer"
//               className="w-full flex gap-4 items-center bg-amber-500 hover:bg-amber-400 py-2 px-4 rounded-sm justify-center"
//               href={demo}
//             >
//               {/* <BsLink45Deg size={30} color="white" /> */}
//               <span className="text-[16px] text-secondary">Demo</span>
//             </a>
//           ) : (
//             <span className="flex gap-4 items-center bg-gray-500 hover:bg-gray-400 py-2 px-4 rounded-md justify-center">
//               {/* <BsLink45Deg size={30} color="white" /> */}
//               <span className="text-[16px] text-secondary">Demo</span>
//             </span>
//           )}
//         </section>
//       </section>
//     </article>
