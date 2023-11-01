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

export const eventQuery = groq`*[_type == "event"] {
  _id,
  title,
  date,
  'icon1': icon1.name,
  'icon2': icon2.name,
  'eventLocation': string,
}`;
