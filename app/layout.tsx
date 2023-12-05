import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Nguyen",
  description: "This is the personal portfolio of Philip Nguyen, a Software Engineer who specializes web development within the JavaScript/TypeScript environment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
