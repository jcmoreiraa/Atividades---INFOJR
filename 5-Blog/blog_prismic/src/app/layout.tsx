import type { Metadata } from "next";
import { Inter, Nunito, Nunito_Sans} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { createClient } from '@/prismicio'
import Header  from "./components/Header";
import Footer from "./components/Footer"
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-inter', 
  display: 'swap'
})

const nunito_sans = Nunito_Sans({
  subsets:['latin'],
  variable: '--font-inter', 
  display:'swap'
})


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings");

 
  return {
    title: settings.data.site_title || "",
    description: settings.data.meta_description || "",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunito_sans.variable)}>
      <body>
        <Header />
        {children}
        <Footer/>
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-emerald-100 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      
      
      </body>
    </html>
  );
}
