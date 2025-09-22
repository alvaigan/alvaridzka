import type { Metadata } from "next";
import {Aref_Ruqaa, Chivo, Cookie, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";


const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cookie = Cookie({
  variable: "--font-cookie",
  style: ["normal"],
  weight: ["400"],
}) 

const arefRuqa = Aref_Ruqaa({
  subsets: ["latin"],
  variable: "--font-aref-ruqa",
  style: ["normal"],
  weight: ["400", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Alvaigan & Ridzka Nur Fajrie",
  description: "The Wedding of Alvaigan & Ridzka Nur Fajrie",
  openGraph: {
    title: "Alvaigan & Ridzka Nur Fajrie",
    description: "The Wedding of Alvaigan & Ridzka Nur Fajrie",
    images: [
      {
        url: "https://alvaridzka.site/couple.jpg", // Replace with your actual domain
        width: 1200,
        height: 630,
        alt: "Alvaigan & Ridzka Nur Fajrie",
      },
      {
        url: "https://alvaridzka.site/main-couple.png", // Alternative image
        width: 1080,
        height: 1080,
        alt: "Alvaigan & Ridzka Nur Fajrie",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvaigan & Ridzka Nur Fajrie",
    description: "The Wedding of Alvaigan & Ridzka Nur Fajrie",
    images: ["https://alvaridzka.site/couple.jpg"], // Replace with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${chivo.variable} ${cookie.variable} ${arefRuqa.variable} ${playfair.variable} antialiased`}
      >
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
