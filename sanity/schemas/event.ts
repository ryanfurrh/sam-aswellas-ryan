import { Confetti } from "@phosphor-icons/react/dist/ssr/Confetti";

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon: Confetti,
  fields: [
    {
      name: "title",
      title: "Event Name",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "icon1",
      title: "Icon 1",
      type: "icon",
    },
    {
      name: "icon2",
      title: "Icon 2",
      type: "icon",
    },
    {
      title: "Location",
      name: "string",
      type: "string",
    },
  ],
};
