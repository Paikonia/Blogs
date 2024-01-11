import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import { footerLists, footerSocials, nav } from "@/assets/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aikos notes",
  description:
    "My Personal Portfolio and Blog site. Inspired by Gates notes and Odyssey astro theme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar rightMenu={true} navData={nav} />

        {children}

        <Footer
          footerSocials={footerSocials}
          copyrightName="AikosNotes"
          footerLists={footerLists}
        />
      </body>
    </html>
  );
}
