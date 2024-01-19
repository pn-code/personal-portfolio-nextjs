import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Philip Nguyen",
    description:
        "This is the personal portfolio of Philip Nguyen, a Software Engineer who specializes web development within the JavaScript/TypeScript environment.",
    openGraph: {
        images: [
            {
                url: "https://github.com/pn-code/personal-portfolio-nextjs/blob/main/public/og.png",
                width: 800,
                height: 600,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={karla.className}>{children}</body>
        </html>
    );
}
