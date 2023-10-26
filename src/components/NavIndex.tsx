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
  color?: string;
  textcolor?: string;
};

export const NavIndex: { items: Item[] }[] = [
  {
    items: [
      {
        name: "photo gallery",
        slug: "/timeline",
        gif: <TimelineGif />,
        color: "bg-aquamarine-400",
      },
    ],
  },
  {
    items: [
      {
        name: "video vault",
        slug: "/video-vault",
        gif: <VideoVaultGif />,
        color: "bg-portage-400",
      },
    ],
  },
  {
    items: [
      {
        name: "trips",
        slug: "/trips",
        gif: <TripsGif />,
        color: "bg-lavender-400",
      },
    ],
  },
  {
    items: [
      {
        name: "stats",
        slug: "/stats",
        gif: <StatsGif />,
        color: "bg-neo-300",
      },
    ],
  },

  {
    items: [
      {
        name: "studio",
        slug: "/studio",
        gif: <StudioGif />,
        color: "bg-mako-900",
        textcolor: "text-mako-300/90",
      },
    ],
  },
];
