import { Collection, RichTextType } from "tinacms";

export const simplePage = (name: string, label: string, path: string, shorcodes: RichTextType[] = []) : Collection => ({
    name,
    label,
    path,
    ui: {
        allowedActions: {
        create: false,
        delete: false,
        },
    },
    fields: [
        {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
        },
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
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
        templates:  shorcodes,
        },
    ]
})