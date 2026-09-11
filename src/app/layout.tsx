import type { Metadata } from "next";
import { Press_Start_2P, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const body = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://stonkcraft.vercel.app"),
  title: {
    default: "StonkCraft — Play Minecraft. Win Stocks.",
    template: "%s · StonkCraft",
  },
  description:
    "StonkCraft is a Minecraft minigame server where every win pays out in real fractional shares. Parkour, PvP, spleef and more. Compete, climb the leaderboard, build a portfolio.",
  icons: { icon: "/icon.png", apple: "/logo.png" },
  openGraph: {
    title: "StonkCraft — Play Minecraft. Win Stocks.",
    description:
      "A Minecraft minigame server where winning pays out in fractional shares.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${pixel.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Ticker />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
