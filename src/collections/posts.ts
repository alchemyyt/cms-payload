import { text } from 'express';
import { CollectionConfig } from 'payload/types';
const Posts: CollectionConfig = {
  access:{
    read:()=>true
  },
  slug: 'posts',//url
  admin: {
    useAsTitle: 'title',//va a buscar por nombre
  },
  fields: [
    {
      name:'category',
      type:'select',
      options: [
        {
          label: 'Web',
          value: 'web',
        },
        {
          label: 'Ingles',
          value: 'ingles',
        }
      ]
    },
    {
			name: 'title',
			type: 'text', 
		},
		{
			name: 'content',
			type: 'code', 
      admin: {
        language: 'html'
      }

		},
    {
			name: 'subject',
			type: 'text', 
		},
    {
      name: "date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
    {
			name: 'image',
			type: 'text', 
		},
  ],
};

export default Posts;