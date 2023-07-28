import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed w-full h-20 z-[100] bg-secondary">
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-between justify-center items-center w-full h-full sm:px-[20%]">
                <a
                    className="text-xl font-semibold flex gap-4 items-center"
                    href="/"
                >
                    <h1 className="text-lg font-bold">Philip Nguyen</h1>
                </a>

                <ul className="flex gap-4 text-primaryBtn">
                    <li className="text-[14px] font-semibold">
                        <a href="/">Portfolio</a>
                    </li>
                    <li className="text-[14px] font-semibold">
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                    <li className="text-[14px] font-semibold">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
