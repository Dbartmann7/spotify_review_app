import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../Components/SiteHeader/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Review App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen relative`}>
        <SiteHeader/>
        <main className="w-[calc(100vw-8px)] h-[calc(100%-80px-8px-16px)] m-1 p-4">
          {children}
        </main>
        </body>
    </html>
  );
}
