import type { Metadata } from "next";
import {Chivo, Cookie } from "next/font/google";
import "./globals.css";


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

export const metadata: Metadata = {
  title: "Alvaigan & Ridzka Nur Fajrie",
  description: "The Wedding of Alvaigan & Ridzka Nur Fajrie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${chivo.variable} ${cookie.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
