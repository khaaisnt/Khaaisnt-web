import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khaaisnt - Frontend Developer",
  description: "Rakha Adrian Personal Website Made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" scroll-smooth>
      <body className={`${inter.className} bg-primary-black container`}>{children}</body>
    </html>
  );
}
