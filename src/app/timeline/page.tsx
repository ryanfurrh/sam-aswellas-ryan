import Link from "next/link";
import BackHome from "@/components/BackHome";
import Line from "@/components/Line";
import PhotoGallery from "./PhotoGallery";
import {
  eventQuery,
  mediaBrowserQuery,
} from "../../../sanity/lib/sanity.queries";
import { sanityFetch } from "../../../sanity/lib/sanityFetch";
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";

interface Data {
  _id: string;
  url: string;
  height: number;
  width: number;
  description?: string;
  title?: string;
  date: string;
  tags?: string;
}

interface eventData {
  _id: string;
  title: string;
  date: string;
  icon1: string;
  icon2?: string;
  eventLocation: string;
}

export default async function Page() {
  const data = (await sanityFetch({
    query: mediaBrowserQuery,
  })) as Data[];
  const eventData = (await sanityFetch({ query: eventQuery })) as eventData[];
  return (
    <main className="flex min-h-[calc(100vh-112px)] h-full flex-col items-center justify-between p-10 pt-16 w-full text-bermuda-300/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="flex flex-col items-center gap-8 pb-10">
        <div className="px-4 py-2 rounded-[4px] bg-bermuda-300 w-fit">
          <h1 className="text-xl font-medium text-center text-mako-950">
            photo gallery
          </h1>
        </div>
        <h2>timeline</h2>
        <div className="relative flex h-full">
          <Line />
          <PhotoGallery data={data} eventData={eventData} />
        </div>
      </div>
      <Link
        href={"/studio/media"}
        className="border-bermuda-600 text-bermuda-200 border px-8 py-2 rounded-[4px] text-xs flex flex-row items-center gap-2"
      >
        <span>
          <Plus width={12} weight="bold" />
        </span>
        Add Moment
      </Link>
    </main>
  );
}
