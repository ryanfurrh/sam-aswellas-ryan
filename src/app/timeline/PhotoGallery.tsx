"use client";
import Image from "next/image";
import { CalendarBlank, MapPin } from "@phosphor-icons/react/dist/ssr/index";
import { format, parseISO } from "date-fns";
import DropdownSelector from "@/components/DropdownSelector";
import { useState } from "react";
import { Icon } from "@iconify/react";

type Moment = {
  _id: string;
  date: string;
  url?: string;
  description?: string;
  tags?: string;
  height: number;
  width: number;
};


type Props = {
  data: Moment[];
};

export default function PhotoGallery({ data, eventData }: Props) {
  const groupedData: {
    [data: string]: { moments: Moment[]; events: Event[] };

  data.forEach((moment: { date: any }) => {
    if (moment.date) {
      const formattedDate = format(parseISO(moment.date), "MMMM yyyy");
      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = { moments: [], events: [] };
      }
      groupedData[formattedDate].moments.push(moment as Moment);
    }
  });

  eventData.forEach((event: { date: any }) => {
    const formattedDate = format(parseISO(event.date), "MMMM yyy");
    if (!groupedData[formattedDate]) {
      groupedData[formattedDate] = { moments: [], events: [] };
    }
    groupedData[formattedDate].events.push(event as Event);
  });

  const sortedMonths = Object.keys(groupedData).sort((a, b) => {
    if (selectedFilter) {
      return +new Date(b) - +new Date(a);
    } else {
      return +new Date(a) - +new Date(b);
    }
  });

  sortedMonths.forEach((month) => {
    groupedData[month].moments.sort((a, b) => {
      if (selectedFilter) {
        return +new Date(b.date) - +new Date(a.date);
      } else {
        return +new Date(a.date) - +new Date(b.date);
      }
    });
  });

  return (

      {sortedMonths.length > 0 && (
        <div className="z-10 flex flex-col items-center gap-12">
          {sortedMonths.map((month) => (
            <div key={month} className="">
              <div className="flex justify-center w-full pb-8">
                <div className="bg-bermuda-300 justify-center px-4 py-2 w-fit rounded-[4px] text-center flex flex-col items-center">
                  <CalendarBlank className="fill-mako-950" width={12} />
                  <h2 className="text-xs font-semibold text-mako-950">
                    {month}
                  </h2>
                </div>
              </div>
              <ul className="z-10 flex flex-col items-center justify-center w-full gap-8">
                {groupedData[month].moments.map((moment: any) => (
                  <li key={moment._id} className="">
                    <div className="flex flex-col items-center gap-2 h-fit">
                      <div className="flex flex-col border-bermuda-500 rounded-[4px] overflow-clip bg-black border h-fit sm:relative">
                        <Image
                          src={moment.url}
                          height={Math.round(moment.height / 3.5)}
                          width={Math.round(moment.width / 3.5)}
                          alt="Moment Image"
                          className="w-auto h-auto"
                        />
                        <h1 key={moment._id}>{moment.description}</h1>
                      </div>

                      <div className=" w-fit rounded-[4px] flex flex-col gap-1 items-center sm:absolute sm:-right-24 sm:items-start">
                        <div className="flex gap-2 px-2 py-1 rounded-sm bg-bermuda-950">
                          <CalendarBlank width={9} />
                          <h3 className=" text-bermuda-500 text-[9px]">
                            {format(parseISO(moment.date), "MM/dd/yy")}
                          </h3>
                        </div>
                        {moment.tags ? (
                          <div className="flex gap-2 px-2 py-1 rounded-sm w-fit bg-bermuda-950">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
