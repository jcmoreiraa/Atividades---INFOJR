import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata: Metadata = {
  title: "La Padarie",
  description: "Queue management system for a bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen w-full items-center flex-col bg-[#E5CF94] text-[hsl(31,90%,20%)]`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
