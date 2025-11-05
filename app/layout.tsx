import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iraklis - Sculptor",
  description: "Portfolio of marble sculptor Iraklis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${playfair.className} flex flex-col min-h-screen bg-gray-50 antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main className='flex-grow'>{children}</main>
        <footer className='bg-gray-200 text-gray-700 py-6 text-center mt-12'>
          <div className='container mx-auto px-4'>
            <p>
              &copy; {new Date().getFullYear()} Iraklis. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
