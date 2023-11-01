import { groq } from "next-sanity";

export const mediaBrowserQuery = groq`*[_type == "sanity.imageAsset"] {
    _id,
    url,
    'height': metadata.dimensions.height,
    'width': metadata.dimensions.width,
    description,
    title,
    'date':  metadata.exif.DateTimeOriginal,
    "tags": opt.media.tags[]->name.current,
  }`;
