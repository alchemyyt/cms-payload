import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Posts from './collections/posts';
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Posts,
    // Add Collections here
    // Examples,
  ],
  csrf: [ // whitelist of domains to allow cookie auth from
    'https://payload-sfkc.onrender.com',
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
