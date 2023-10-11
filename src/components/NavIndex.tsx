export type Item = {
  name?: string;
  slug: string;
  description?: string;
  icon?: any;
};

export const NavIndex: { items: Item[] }[] = [
  {
    items: [
      {
        name: "Timeline",
        slug: "/timeline",
      },
    ],
  },
  {
    items: [
      {
        name: "Trips",
        slug: "/trips",
      },
    ],
  },
  {
    items: [
      {
        name: "Stats",
        slug: "/stats",
      },
    ],
  },
  {
    items: [
      {
        name: "Studio",
        slug: "/studio",
      },
    ],
  },
];
