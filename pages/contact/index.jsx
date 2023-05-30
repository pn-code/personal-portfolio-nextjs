import Contact from "../../components/Contact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <main className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center sm:px-10">
      <Head>
        <title>Contact Me | Philip Nguyen</title>
        <meta
          name="description"
          content="Philip Nguyen, a Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Contact />
    </main>
  );
}
