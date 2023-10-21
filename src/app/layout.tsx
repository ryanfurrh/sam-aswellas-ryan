import BackHome from "@/components/BackHome";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron, IBM_Plex_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sam & Ryan <3",
  description: "A web app for our relationship <3",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${plex.className}`}>
      <body className="">
        <div className="">{children}</div>
      </body>
    </html>
  );
}
