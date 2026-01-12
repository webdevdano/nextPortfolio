import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderBackdrop from "./components/HeaderBackdrop";
import MusicPillClient from "./components/MusicPillClient";
import Providers from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <HeaderBackdrop />
          <Navbar />
          {children}
          <Footer />
          <MusicPillClient
            tracks={[
              {
                src: "/PortfolioMedia/Audio/Machinedrum%20-%20Ur2yung.mp3",
                artist: "Machinedrum",
                title: "Ur2yung",
              },
              {
                src: "/PortfolioMedia/Audio/Gramatik%20-%20Chillaxin'%20By%20The%20Sea.mp3",
                artist: "Gramatik",
                title: "Chillaxin' By The Sea",
              },
              {
                src: "/PortfolioMedia/Audio/Gramatik%20-%20Skylight.mp3",
                artist: "Gramatik",
                title: "Skylight",
              },
            ]}
          />
        </Providers>
      </body>
    </html>
  );
}
