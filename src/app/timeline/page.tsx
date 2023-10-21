import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import BackHome from "@/components/BackHome";
import { format, parseISO } from "date-fns";
import Line from "@/components/Line";
import useContentHeight from "@/hooks/useContentHeight";
import { CalendarBlank, MapPin } from "@phosphor-icons/react/dist/ssr/index";

interface Data {
  _id: string;
  url: string;
  height: number;
  width: number;
  description?: string;
  title?: string;
  date?: string;
  tags?: string;
}

async function getMoments() {
  const query = `*[_type == "sanity.imageAsset"] {
    _id,
    url,
    'height': metadata.dimensions.height,
    'width': metadata.dimensions.width,
    description,
    title,
    'date':  metadata.exif.DateTimeOriginal,
    "tags": opt.media.tags[]->name.current,
  }`;
  const data: Data[] = await client.fetch(query);

  data.forEach((moment) => {
    if (moment.date) {
      moment.date = format(parseISO(moment.date), "MMMM dd, yyyy");
    }
  });

  return data;
}

export default async function Page() {
  const data = (await getMoments()) as Data[];
  data.sort((a, b) => {
    if (a.date && b.date) {
      return (new Date(a.date) as any) - (new Date(b.date) as any);
    }
    return 0;
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full relative">
      <div className="absolute w-full left-0">
        <BackHome />
      </div>
      <Line />
      <div className="gap-8 flex flex-col pb-10">
        <h1 className="text-3xl text-center font-bold">Timeline</h1>

        {data.length > 0 && (
          <ul className="flex flex-wrap w-full justify-center gap-4">
            {data.map((moment) => (
              <li
                key={moment._id}
                className="py-4 px-4 flex border-green-900 rounded-md bg-black border"
              >
                <div className="flex flex-col gap-4 h-auto">
                  <Image
                    objectFit="contain"
                    src={moment.url}
                    height={`${moment.height / 4}`}
                    width={`${moment.width / 4}`}
                    alt="Moment Image"
                  />

                  <div className="flex flex-col gap-2">
                    <h1 key={moment._id}>{moment.description}</h1>
                    <div className=" w-auto flex flex-col">
                      <div className="flex gap-2 bg-green-950/70 py-1 px-2">
                        <CalendarBlank width={9} />
                        <h3 className=" rounded-sm text-white/50 text-[9px]">
                          {moment.date}
                        </h3>
                      </div>
                      {moment.tags ? (
                        <div className="flex items-center py-1 px-2 rounded-sm gap-2">
                          <MapPin width={9} />
                          <h1 className=" text-white/50 text-[10px]">
                            {moment.tags}
                          </h1>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link
        href={"/studio"}
        className="border-white border px-4 py-2 rounded-sm bg-black"
      >
        + Add Moment
      </Link>
    </main>
  );
}
