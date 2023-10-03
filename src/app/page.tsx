import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/HomeNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-full gap-12">
      <h1 className="text-3xl font-bold">Home</h1>
      <HomeNav />
    </main>
  );
}
