import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Providers } from "./providers";
import { SiGithubactions } from "react-icons/si";
import { FaGithub, FaHome } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Most Read POC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar>
            <NavbarContent>
              <NavbarItem>
                <Link href="/" className="text-black text-2xl">
                  <FaHome aria-label="Home button" />
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <a
                href="https://github.com/justinjordan/mostreadpoc/blob/main/app/actions.ts"
                className="text-black text-2xl"
                target="_blank"
                aria-label="View source on GitHub"
              >
                <FaGithub aria-label="GitHub button" />
              </a>
            </NavbarContent>
          </Navbar>
          <main className="mx-auto max-w-[1024px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
