import StatsGif from "@/app/public/StatsGif";
import StudioGif from "@/app/public/StudioGif";
import TimelineGif from "@/app/public/TimelineGif";
import TripsGif from "@/app/public/TripsGif";
import VideoVaultGif from "@/app/public/VideoVaultGif";

export type Item = {
  name?: string;
  slug: string;
  description?: string;
  icon?: any;
  gif?: any;
};

export const NavIndex: { items: Item[] }[] = [
  {
    items: [
      {
        name: "Timeline",
        slug: "/timeline",
        gif: <TimelineGif />,
        gif: <VideoVaultGif />,
      },
    ],
  },
  {
    items: [
      {
        name: "Trips",
        slug: "/trips",
        gif: <TripsGif />,
      },
    ],
  },
  {
    items: [
      {
        name: "Stats",
        slug: "/stats",
        gif: <StatsGif />,
      },
    ],
  },
  {
    items: [
      {
        name: "Studio",
        slug: "/studio",
        gif: <StudioGif />,
      },
    ],
  },
];
