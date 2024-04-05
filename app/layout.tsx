import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Providers } from "./providers";

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
                <Link href="/">Home</Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          <main className="mx-auto max-w-[1024px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
