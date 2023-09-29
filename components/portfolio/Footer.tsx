import React from "react";
import { Linkedin, Github, Mail, ChevronsUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer id="footer" className="w-full h-full text-center">
      <a href="#">
        <Button className="h-12 w-12 mb-5 rounded-full p-1">
          <ChevronsUp size={30} />
        </Button>
      </a>

      <h2>Contact Me</h2>
      <div className="flex justify-center gap-4 max-w-[330px] m-auto pb-4 pt-4">
        <a
          href="https://www.linkedin.com/in/pncode"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="rounded-full bg-slate-900 dark:bg-slate-50 p-1 h-12 w-12 dark:hover:bg-slate-200">
            <Linkedin size={24} />
          </Button>
        </a>

        <a href="https://github.com/pn-code" target="_blank" rel="noreferrer">
          <Button className="rounded-full bg-slate-900 dark:bg-slate-50 p-1 h-12 w-12 dark:hover:bg-slate-200">
            <Github size={24} />
          </Button>
        </a>

        <a
          href="mailto:philipnguyen953@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="rounded-full bg-slate-900 dark:bg-slate-50 p-1 h-12 w-12 dark:hover:bg-slate-200">
            <Mail size={24} />
          </Button>
        </a>
      </div>
    </footer>
  );
}
