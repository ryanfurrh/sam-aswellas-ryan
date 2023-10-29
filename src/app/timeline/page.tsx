import Link from "next/link";
import BackHome from "@/components/BackHome";
import Line from "@/components/Line";
import PhotoGallery from "./PhotoGallery";

export default async function Page() {
  return (
    <main className="flex min-h-[calc(100vh-112px)] h-full flex-col items-center justify-between p-10 pt-16 w-full text-bermuda-300/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="gap-8 flex flex-col pb-10 items-center">
        <div className="px-4 py-2 rounded-[4px] bg-bermuda-300 w-fit">
          <h1 className="text-xl text-center font-medium text-mako-950">
            photo gallery
          </h1>
        </div>
        <h2>timeline</h2>
        <div className="relative flex h-full">
          <Line />
          <PhotoGallery />
        </div>
      </div>
      <Link
        href={"/studio"}
        className="border-bermuda-400 border px-8 py-2 rounded-[4px]"
      >
        + Add Moment
      </Link>
    </main>
  );
}
