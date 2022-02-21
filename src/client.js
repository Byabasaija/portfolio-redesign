import sanityClient from '@sanity/client';
import imageUrBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_TOKEN,
})

const builder = imageUrBuilder(client);

export const urlFor = (source)=>builder.image(source);