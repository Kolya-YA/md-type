import type { RichTextType } from 'tinacms'

export const scDetails: RichTextType = {
    name: 'details',
    label: 'Details/summary block',
    match: {
        name: 'details',
        start: '{{<',
        end: '>}}'
    },
    fields: [
      {
        name: 'summary',
        label: 'Summary (header)',
        type: 'string',
        required: true,
      },
      {
        name: 'open',
        label: 'Open on load',
        type: 'boolean',
      },
      {
        name: "children",
        label: 'Details content',
        type: "rich-text"
      },
    ],
}