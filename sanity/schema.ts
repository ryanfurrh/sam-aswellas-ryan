import { type SchemaTypeDefinition } from "sanity";
import moment from "./schemas/moment";
import testing from "./schemas/testing";
import siteSettings from "./schemas/siteSettings";
import colors from "./schemas/colors";
import mainNav from "./schemas/mainNav";
import memory from "./schemas/memory";
import event from "./schemas/event";

export const schema = {
  types: [moment, testing, siteSettings, colors, mainNav, memory, event],
};
