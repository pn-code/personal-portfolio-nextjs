import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed w-full h-20 z-[100] bg-secondary">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between justify-center items-center w-full h-full sm:px-[20%]">
                <Link
                    className="text-xl font-semibold flex gap-4 items-center"
                    href="/"
                >
                    <h1 className="text-lg font-bold">Philip Nguyen</h1>
                </Link>

                <ul className="flex gap-4 text-primaryBtn">
                    <li className="text-[14px] font-semibold hover:text-blue-300 ease-linear duration-200">
                        <Link href="/">Portfolio</Link>
                    </li>
                    <li className="text-[14px] font-semibold hover:text-blue-300 ease-linear duration-200">
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="text-[14px] font-semibold hover:text-blue-300 ease-linear duration-200">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
