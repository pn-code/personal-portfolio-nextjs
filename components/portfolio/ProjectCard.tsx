import Image from "next/image";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

import { Code, Rocket } from "lucide-react";
import SkillList from "./SkillList";

interface ProjectCardProps {
    githubLink: string;
    demo: string;
    title: string;
    description: string;
    skills: string[];
    imageSrc: string;
    role: string;
}

export default function ProjectCard({
    githubLink,
    demo,
    title,
    description,
    skills,
    imageSrc,
    role,
}: ProjectCardProps) {
    return (
        <Card className="dark:bg-black/25 xl:flex lg:p-4 lg:gap-4 w-full h-full rounded-none md:rounded-md">
            {/* Image Container */}
            <div className="relative w-full lg:min-w-[750px] h-[300px] md:h-[520px]">
                <Image
                    className="object-cover md:rounded-md"
                    src={imageSrc}
                    alt={title}
                    fill
                />
            </div>

            <div className="flex flex-col gap-4">
                <CardHeader className="space-y-4">
                    <CardTitle className="text-3xl md:text-4xl">
                        {title}
                    </CardTitle>
                    <div className="tracking-tight">
                        <h3 className="text-[18px] font-bold text-primary">
                            Role:
                        </h3>
                        <p className="text-slate-600 font-[16px]">{role}</p>
                    </div>

                    <CardDescription className="text-[16px] tracking-tight">
                        <h3 className="text-[18px] font-bold text-primary">
                            Highlights:
                        </h3>
                        <p className="text-slate-600 font-[16px]">{description}</p>
                    </CardDescription>
                </CardHeader>

                <CardContent className="w-full h-full flex flex-col xl:flex-row justify-between items-center gap-4">
                    <section className="w-full h-full flex flex-col gap-4 justify-between items-center">
                        <SkillList skills={skills} />

                        {/* Code Buttons */}
                        <section className="flex gap-2 mb-2 w-full justify-between mt-4 lg:mt-0 lg:justify-end">
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
