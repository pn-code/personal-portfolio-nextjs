import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed bg-slate-50 dark:bg-slate-900 w-full flex flex-col md:flex-row md:px-[19%] justify-between items-center py-2 md:h-16 z-[100]">
      <a className="w-[220px]" href="/">
        <Button className="hidden sm:flex w-full p-0 text-xl md:text-2xl font-bold" variant="ghost">
          Philip Nguyen
        </Button>
      </a>

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
