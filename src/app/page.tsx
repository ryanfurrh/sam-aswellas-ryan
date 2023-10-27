import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";
import WelcomeGif from "./public/WelcomeGif";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 py-10 w-full gap-4">
      <div className="">
        <WelcomeGif />
        <div className="bg-white absolute w-full h-24 top-12 right-0 left-0 hue"></div>
      </div>
      <HomeNav />
    </main>
  );
}
