import { Collection } from "tinacms"
import { scDetails } from "../shortcodes/details"

export const infoBlock: Collection = {
  name: "info",
  label: "Info",
  path: "content/de/headless",
  match: {
    include: 'info',
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "datetime",
      name: "date",
      label: "Last edit date",
      required: true,
      ui: {
        component: 'date',
        dateFormat: 'YYYY-MM-DD'
      },
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [
        scDetails
      ],
    },
  ],
}