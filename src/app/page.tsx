import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import WelcomeGif from "./public/WelcomeGif";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 pt-28 w-full gap-4">
      <WelcomeGif />
      <HomeNav />
    </main>
  );
}
