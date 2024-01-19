import React from "react";
import { Linkedin, Github, Mail, ChevronsUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer
            id="footer"
            className="w-full h-full text-center bg-slate-900 pb-4"
        >
            <Button className="h-12 w-12 mb-5 rounded-full p-1 hover:bg-slate-700 duration-200 bg-slate-600">
                <a href="#">
                    <ChevronsUp size={30} />
                </a>
            </Button>

            <span className="block text-sm text-slate-100">
                Scroll to the Top
            </span>

            <div className="flex justify-center gap-4 max-w-[330px] m-auto py-4">
                <a
                    href="https://www.linkedin.com/in/pncode"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="rounded-full bg-slate-50 p-1 h-12 w-12 text-black hover:bg-gray-200 hover:scale-110 duration-200">
                        <Linkedin size={24} />
                    </Button>
                </a>

                <a
                    href="https://github.com/pn-code"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="rounded-full bg-slate-50 p-1 h-12 w-12 text-black hover:bg-gray-200 hover:scale-110 duration-200">
                        <Github size={24} />
                    </Button>
                </a>
            </div>
        </footer>
    );
}
