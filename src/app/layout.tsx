import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fakta eller påhitt?",
  description: "Kan du skilja fakta från AI-genererat påhitt?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <nav className="flex justify-center gap-8 p-5 bg-gray-900 border-b border-gray-800">
          <Link
            href="/"
            className="text-gray-400 font-semibold text-lg hover:text-purple-400 transition-colors"
          >
            Hem
          </Link>
          <Link
            href="/game/animals"
            className="text-gray-400 font-semibold text-lg hover:text-purple-400 transition-colors"
          >
            Spela
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
