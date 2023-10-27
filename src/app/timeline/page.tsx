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
          {data.length > 0 && (
            <ul className="flex flex-wrap items-center w-full justify-center gap-8 z-10">
              {data.map((moment) => (
                <li key={moment._id} className="">
                  <div className="flex flex-col h-fit items-center gap-2">
                    <div className="flex flex-col border-bermuda-500 rounded-[4px] overflow-clip bg-black border h-fit">
                      <Image
                        src={moment.url}
                        height={Math.round(moment.height / 3.5)}
                        width={Math.round(moment.width / 3.5)}
                        alt="Moment Image"
                        className="w-auto h-auto"
                      />
                      <h1 key={moment._id}>{moment.description}</h1>
                    </div>

                    <div className=" w-fit rounded-[4px] flex flex-col gap-1 items-center">
                      <div className="flex gap-2 bg-bermuda-950 rounded-sm py-1 px-2">
                        <CalendarBlank width={9} />
                        <h3 className=" text-bermuda-500 text-[9px]">
                          {moment.date}
                        </h3>
                      </div>
                      {moment.tags ? (
                        <div className="w-fit flex gap-2 bg-bermuda-950 rounded-sm py-1 px-2">
                          <MapPin width={9} />
                          <h1 className=" text-bermuda-500 text-[9px]">
                            {moment.tags}
                          </h1>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
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
