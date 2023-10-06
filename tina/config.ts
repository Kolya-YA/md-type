import { defineConfig } from "tinacms";
import { scLinkBtn } from "./shortcodes/link-btn";
import { heroBlock } from "./collections/hero";
import { infoBlock } from "./collections/info";
import { simplePage } from "./collections/simplePage";

// Your hosting provider likely exposes this as an environment variable
const branch = "tina";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

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
