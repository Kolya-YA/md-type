import type { RichTextType } from 'tinacms'

export const scLinkBtn: RichTextType = {
    name: 'link_btn',
    label: 'Link button',
    match: {
        name: 'link-btn',
        start: '{{<',
        end: '>}}'
    },
    fields: [
      {
        name: 'href',
        label: 'href',
        type: 'string',
        required: true,
      },
      {
        name: "children",
        type: "rich-text"
      },
      {
        name: 'style',
        label: 'Style classes',
        type: 'string',
      },
    ],
}