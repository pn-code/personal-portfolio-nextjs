import "./globals.css";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Nguyen",
  description: "Philip Nguyen, a Full Stack Developer",
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
