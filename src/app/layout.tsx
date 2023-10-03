import BackHome from "@/components/BackHome";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className="">
        <div className="">{children}</div>
      </body>
    </html>
  );
}
