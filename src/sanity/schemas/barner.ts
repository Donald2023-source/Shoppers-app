import { defineField, defineType } from "sanity";

export default defineType({
    type: 'document',
    name: 'barner',
    title: 'Barner',
    fields: [
        defineField({
            name: 'title',
            title: 'Titile',
            type: 'string'
        })
    ]
})