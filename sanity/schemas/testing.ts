export default {
  title: "Image Moment",
  name: "testing",
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
