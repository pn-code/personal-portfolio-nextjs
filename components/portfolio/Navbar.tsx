import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed bg-background w-full flex flex-col md:flex-row md:px-[19%] justify-between items-center pb-2 md:pb-0 md:h-16 z-[100]">
      <Link className="w-full text-center md:text-left" href="/">
        <Button className="text-xl md:text-2xl font-bold" variant="ghost">
          Philip Nguyen
        </Button>
      </Link>

      <ul className="w-full flex justify-center md:justify-end gap-1.5">
        <li>
          <ModeToggle />
        </li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          <a href="#">
            <Button className="md:text-[16px] font-bold" variant="link">
              Portfolio
            </Button>
          </a>
        </li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          <Link href="#footer">
            <Button className="md:text-[16px] font-bold" variant="link">
              Contact
            </Button>
          </Link>
        </li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
            <Button className="md:text-[16px] font-bold">Resume</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
