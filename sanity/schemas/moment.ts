export default {
  name: "moment",
  type: "document",
  title: "Moments",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    { title: "Description", name: "description", type: "text" },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: "true",
        metadata: ["exif", "location"],
      },
    },
  ],
};
