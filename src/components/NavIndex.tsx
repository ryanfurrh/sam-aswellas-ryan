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
        name: "Home",
        slug: "/",
      },
    ],
  },
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
        name: "Studio",
        slug: "/studio",
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
];
