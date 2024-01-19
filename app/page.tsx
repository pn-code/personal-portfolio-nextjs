import Main from "../components/portfolio/Main";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Footer from "../components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
    return (
        <main className="w-full bg-slate-50">
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
