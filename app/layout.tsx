import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-gray-50 antialiased">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 text-gray-700 py-6 text-center mt-12">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Iraklis. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
