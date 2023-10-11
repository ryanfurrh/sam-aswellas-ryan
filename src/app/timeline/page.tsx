import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import BackHome from "@/components/BackHome";

interface Data {
  title: string;
  name: string;
  date: string;
  _id: string;
  imageUrl: string;
}

async function getMoments() {
  const query = `*[_type == "moment"] {
    title,
      name,
      date,
      _id,
      "imageUrl": image.asset->url,
      
  }`;
  const data: Data[] = await client.fetch(query);

  return data;
}

export default async function Page() {
  const data = (await getMoments()) as Data[];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="absolute w-full left-0">
        <BackHome />
      </div>
      <div className="h-full w-[1px] top-36 border border-green-600 border-dashed absolute -z-10"></div>
      <div className="gap-8 flex flex-col">
        <h1 className="text-3xl text-center font-bold">Timeline</h1>

        {data.length > 0 && (
          <ul className="flex flex-col w-full gap-4">
            {data.map((moment) => (
              <li
                key={moment._id}
                className="py-4 px-4 w-full border-green-900 rounded-md bg-black border"
              >
                <div className="flex flex-row w-full gap-4">
                  <div className="h-48 w-36 relative">
                    <Image
                      fill
                      src={moment.imageUrl}
                      alt="Moment Image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 key={moment._id}>{moment.name}</h1>
                    <div>
                      <h3 className="opacity-50 text-xs">{moment.date}</h3>
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
