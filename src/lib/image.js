import { createApi, toJson } from 'unsplash-js';

export const getUnsplashImage = async (query) => {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY
    //...other fetch options
  });
  const data = await unsplash.search.getPhotos({
    query,
    page: 1,
    perPage: 1
  });
  return data;
};
