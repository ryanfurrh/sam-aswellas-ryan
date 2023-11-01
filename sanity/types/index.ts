import type { PortableTextBlock } from "@portabletext/types";
import type { Image } from "sanity";

export interface MediaBrowserImages {
  _id: string;
  url: string;
  height: number;
  width: number;
  description?: string;
  title?: string;
  date?: string;
  tags?: string;
}
