import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',//url
  admin: {
    useAsTitle: 'title',//va a buscar por nombre
  },
  fields: [
    {
			name: 'title',
			type: 'text', 
		},
		{
			name: 'content',
			type: 'richText', 
		},
    {
			name: 'tags',
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
    {//relacionar otra coleccion a esta
      name:'image',
      type:'upload',
      relationTo:'media'//esto es lo que relaciona
    }
  ],
};

export default Posts;