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
  GET_MOVIE_CREDITS: (id) => `${BASE_URL}/movie/${id}/credits`,
  GET_MOVIE_SIMILAR: (id) => `${BASE_URL}/movie/${id}/similar`,
  GET_MOVIE_RECOMMENDATION: (id) => `${BASE_URL}/movie/${id}/recommendations`,
  GET_COLLECTION: (id) => `${BASE_URL}/collection/${id}`,
  GET_POPULAR_MOVIES: (pageNumber) => `${BASE_URL}/movie/popular?language=en-US&page=${pageNumber}`,
  GET_MOVIE_BY_GENRE: (genreID, page) => `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreID}`,
  GET_NOW_PLAYING_MOVIES: `${BASE_URL}/movie/now_playing`,
  GET_TOP_RATED_MOVIES: `${BASE_URL}/movie/top_rated`,
  GET_UPCOMING_MOVIES: `${BASE_URL}/movie/upcoming`,
  
  GET_SERIES_GENRES: `${BASE_URL}/genre/tv/list`,
  GET_SERIE_BY_GENRE: (genreID, page) => `${BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreID}`,
  GET_POPULAR_SERIES: (pageNumber) => `${BASE_URL}/tv/popular?language=en-US&page=${pageNumber}`,
  GET_NOW_PLAYING_SERIES: `${BASE_URL}/tv/on_the_air`,
  GET_TOP_RATED_SERIES: `${BASE_URL}/tv/top_rated`,
};
