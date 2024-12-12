import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Who owns you?",
  description: "Corporate accountability does not exist in any shape whatsoever in the modern age. Laws are aggressively created and molded by corporate interests in order to protect them and limit their own liability. Sharehoarders is a data platform meant to make it easier to find out who is REALLY responsible for the state of the world.",
  applicationName: "Sharehoarders",
  authors: [
    {
      name: "Ibrahim Ali Saberi",
      url: "https://ibrahimsaberi.com"
    },
    {
      name: "Studio HMR",
      url: "https://studiohmr.com"
    }
  ],
  keywords: [
    "eat",
    "the",
    "rich",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header></header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
