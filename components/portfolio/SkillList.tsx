import React from "react";
import SkillCard from "./SkillCard";

interface SkillListProps {
    skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
    return (
        <ul className="w-full flex flex-col gap-2 md:flex-row flex-wrap">
            {skills.map((skill: string) => (
                <li className="w-full md:w-[160px]" key={skill}>
                    <SkillCard skillName={skill} />
                </li>
            ))}
        </ul>
    );
}
