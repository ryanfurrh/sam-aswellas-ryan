import Image from "next/image";
import { CalendarBlank, MapPin } from "@phosphor-icons/react/dist/ssr/index";
import { format, parseISO } from "date-fns";
import { client } from "../../../sanity/lib/client";

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

async function getServerSideProps() {
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
  const data: Data[] = await client.fetch(query, { next: { revalidate: 1 } });

  data.forEach((moment) => {
    if (moment.date) {
      moment.date = format(parseISO(moment.date), "MMMM dd, yyyy");
    }
  });

  return data;
}

export default async function PhotoGallery() {
  const data = (await getServerSideProps()) as Data[];
  data.sort((a, b) => {
    if (a.date && b.date) {
      return (new Date(a.date) as any) - (new Date(b.date) as any);
    }
    return 0;
  });
  return (
    <div>
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
  );
}
