import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderBackdrop from "./components/HeaderBackdrop";
import MusicPill from "./components/MusicPill";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Marinelarena",
  description: "Your Next Full Stack Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <HeaderBackdrop />
          <Navbar />
          {children}
          <Footer />
          <MusicPill
            tracks={[
              {
                src: "/PortfolioMedia/Audio/03%20Cigarettes.mp3",
                artist: "",
                title: "Cigarettes",
              },
              {
                src: "/PortfolioMedia/Audio/11.%20Ur2yung.mp3",
                artist: "",
                title: "Ur2yung",
              },
            ]}
          />
        </Providers>
      </body>
    </html>
  );
}
