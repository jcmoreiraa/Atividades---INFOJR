import type { Metadata } from "next";
import { Poppins, Limelight } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ weight: ['400', '800'], subsets: ['latin'] });
const limelight = Limelight({ weight: '400', subsets: ['latin'], display: 'auto'})

export const metadata: Metadata = {
  title: "Everyflick",
  description: "Everyflick, a movie database made by Stefanny Oliveira and Allan B. C.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
