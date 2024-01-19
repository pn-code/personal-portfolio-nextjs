import React from "react";
import { Button } from "../ui/button";
import { BookDownIcon, Github, Linkedin, LucideFile, Mail } from "lucide-react";
import Image from "next/image";
import WorkImg from "@/public/assets/work.jpg";

export default function Contact() {
    return (
        <div
            id="contact"
            className="w-full md:px-[8%] px-1.5 py-12 bg-slate-900 text-white"
        >
            <div className="w-full h-full mx-auto flex flex-col md:flex-row gap-4 md:gap-24">
                <div className="w-full flex flex-col gap-2 sm:gap-4 justify-center flex-1">
                    <h1 className="md:text-5xl text-4xl font-semibold tracking-tighter mb-2 text-center md:text-left">
                        Contact Me
                    </h1>

                    <p className="text-lg tracking-tight my-4 text-slate-300">
                        Ready to work with me? Let&apos;s chat about your next
                        project.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <a
                            className="w-full"
                            href="mailto:philipnguyen953@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button className="bg-slate-600 flex gap-2 text-lg p-6 hover:bg-slate-700 w-full">
                                <Mail size={24} /> Send me an email
                            </Button>
                        </a>
                        <a
                            className="w-full"
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button className="bg-slate-800 flex gap-2 text-lg p-6 hover:bg-slate-700 w-full">
                                <LucideFile /> View Resume
                            </Button>
                        </a>
                    </div>
                </div>

                <Image
                    src={WorkImg}
                    alt="Work with me"
                    className="md:rounded-md flex-1"
                    width={700}
                />
            </div>
        </div>
    );
}
