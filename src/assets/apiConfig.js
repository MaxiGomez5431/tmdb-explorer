export const API_OPTIONS = {
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgyZjU0NzQwZDU4YjRkZDg1MjllOWRlMzM5ZGEwZSIsIm5iZiI6MTczMDc3MDk1Ni45OTI5MzE2LCJzdWIiOiI2NWRkMDYyZWRjYjZhMzAxODU4NGY4MWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y10pnZ9t61m2i08N6jXo-vit51zmV6W7nula3OmHP_8"
  }
}

const BASE_URL = "https://api.themoviedb.org/3"

export const API_ENDPOINTS = {
  IMAGE_BACKDROP: `https://image.tmdb.org/t/p/w1280`,
  IMAGE_BACKDROP_SMALL: `https://image.tmdb.org/t/p/w500`,
  IMAGE_POSTER: `https://image.tmdb.org/t/p/w342`,
  GET_MOVIE_GENRES: `${BASE_URL}/genre/movie/list`,
  GET_MOVIE_IMAGES: (movieData) => `${BASE_URL}/movie/${movieData.id}/images?language=en`,
  GET_MOVIE_DETAILS: (id) => `${BASE_URL}/movie/${id}`,
  GET_COLLECTION: (id) => `${BASE_URL}/collection/${id}`,
  GET_POPULAR_MOVIES: `${BASE_URL}/movie/popular`,
  GET_NOW_PLAYING_MOVIES: `${BASE_URL}/movie/now_playing`,
  GET_TOP_RATED_MOVIES: `${BASE_URL}/movie/top_rated`,
  GET_UPCOMING_MOVIES: `${BASE_URL}/movie/upcoming`,
};
