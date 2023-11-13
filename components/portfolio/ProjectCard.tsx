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
import SkillList from "./SkillList";

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
        <Card className="dark:bg-black/25 md:flex md:p-4 md:gap-4 w-full h-full">
            {/* Image Container */}
            <div className="relative w-full md:min-w-[500px] h-[380px]">
                <Image
                    className="object-cover rounded-md"
                    src={imageSrc}
                    alt={title}
                    fill
                />
            </div>

            <div className="flex flex-col gap-4">
                <CardHeader className="space-y-4">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>

                <CardContent className="w-full h-full flex flex-col xl:flex-row justify-between items-center gap-4">
                    <section className="w-full h-full flex flex-col gap-4 justify-between items-center">
                        <SkillList skills={skills} />

                        {/* Code Buttons */}
                        <section className="flex gap-2 mb-2 w-full justify-between mt-4 md:mt-0 md:justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={githubLink}
                            >
                                <Button
                                    className="w-full flex gap-2"
                                    variant="outline"
                                >
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
            </div>
        </Card>
    );
}
