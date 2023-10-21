export default {
  title: "Memory",
  name: "memory",
  type: "image",
  options: {
    hotspot: true,
    metadata: ["exif", "location"],
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "text",
    },
  ],
};
