import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed bg-slate-50 dark:bg-slate-900 w-full flex justify-between items-center md:px-[20%] py-2 md:h-16 z-[100]">
      <a
        className="md:w-[180px] hidden md:flex justify-center items-center rounded-md w-full p-0 text-2xl font-bold tracking-tighter hover:bg-slate-200 dark:hover:bg-slate-800 ease-linear duration-100"
        href="/"
      >
        Philip Nguyen
      </a>

      <ul className="w-full flex justify-between md:justify-end gap-1.5 px-2 md:px-0">
        <li className="font-semibold">
          <a href="#">
            <Button className="text-[16px] font-semibold" variant="link">
              Portfolio
            </Button>
          </a>
        </li>
        <li className="font-semibold">
          <Link href="#footer">
            <Button className="text-[16px] font-semibold" variant="link">
              Contact
            </Button>
          </Link>
        </li>
        <li className="font-semibold">
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">
            <Button className="text-[16px] font-semibold">Resume</Button>
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
