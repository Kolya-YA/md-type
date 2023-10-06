import { Collection } from "tinacms"

export const heroBlock: Collection =       {
    name: "hero",
    label: "Hero",
    path: "content/de/", // root index
    match: {
      exclude: '*/*',
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
        type: "string",
        name: "greeting",
        label: "Greeting",
        required: true,
      },
      {
        type: "string",
        name: "heroPhoto",
        label: "heroPhoto",
        required: true,
      },
      {
        type: "string",
        name: "cv",
        label: "CV",
      },
      {
        type: "boolean",
        name: "showCV",
        label: "CV bool",
        description: "Turn on for show CV (not ready)"
      },
      {
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
        templates: [              
        ],
      },
    ],
  }