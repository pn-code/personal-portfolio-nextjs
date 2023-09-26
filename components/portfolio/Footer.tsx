import React from "react";
import { Linkedin, Github, Mail, ChevronsUp } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer id="footer" className="w-full text-center mb-5">
      <Button className="mb-5" variant="ghost">
        <a href="#">
          <ChevronsUp />
        </a>
      </Button>

      <h2>Contact Me</h2>
      <div className="flex justify-center gap-4 max-w-[330px] m-auto pb-4 pt-4">
        <a
          href="https://www.linkedin.com/in/pncode"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer">
            <Linkedin size={24} />
          </Button>
        </a>

        <a href="https://github.com/pn-code" target="_blank" rel="noreferrer">
          <Button className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer">
            <Github size={24} />
          </Button>
        </a>

        <a
          href="mailto:philipnguyen953@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="rounded-full shadow-lg shadow-gray-900 p-2 sm:p-3 cursor-pointer">
            <Mail size={24} />
          </Button>
        </a>
      </div>
    </footer>
  );
}
