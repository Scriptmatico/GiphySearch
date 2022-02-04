import { DEFAULT_VIEW_URL, SEARCH_VIEW_URL } from "../config/config";

export default function getGifs(query) {
  let fetchURL = query ? SEARCH_VIEW_URL + query : DEFAULT_VIEW_URL;
  return fetch(fetchURL)
    .then((res) => res.json())
    .then((body) => {
      const { data = [] } = body;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { id, title } = image;
          const image_small = image.images.downsized_medium.url;
          const image_big = image.images.original.url;
          return { id, title, image_small, image_big };
        });
        return gifs;
      }
    });
}
