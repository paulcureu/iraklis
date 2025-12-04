import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <head>
        <link rel='icon' href='/icon/logo-Iraklis.svg' type='image/svg+xml' />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans flex flex-col min-h-screen bg-background text-foreground antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
