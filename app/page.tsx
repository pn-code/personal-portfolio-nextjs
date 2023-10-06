import Main from "../components/portfolio/Main";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Footer from "../components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
