const API_KEY = "1isZ0QAZCxpLrQPtQVVbybz8WPy6fjGn";

const DEFAULT_VIEW_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;
const SEARCH_VIEW_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=25&offset=0&rating=g&lang=en&q=`;

export { DEFAULT_VIEW_URL, SEARCH_VIEW_URL };
