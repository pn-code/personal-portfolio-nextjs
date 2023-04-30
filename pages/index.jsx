import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Philip Nguyen</title>
                <meta
                    name="description"
                    content="Philip Nguyen, a Full Stack Developer"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.svg"/>
            </Head>
            <Navbar />
            <main className="px-4">
                <Main />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
