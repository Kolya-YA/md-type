import { defineConfig } from "tinacms";
import { scLinkBtn } from "./shortcodes/link-btn";
import { heroBlock } from "./collections/hero";
import { infoBlock } from "./collections/info";
import { simplePage } from "./collections/simplePage";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "tina";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null, // Get this from tina.io
  token: process.env.TINA_TOKEN || null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      heroBlock,
      infoBlock,
      simplePage('impressum', 'Impressum', 'content/de/impressum', [scLinkBtn]),
      simplePage('datenshutz', 'Datenschutz', 'content/de/datenschutz', [scLinkBtn]),
    ],
  },
});
