import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, revalidateSecret } from "./sanity.api";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,

  perspective: "published",
});
