export const API_OPTIONS = {
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTgyZjU0NzQwZDU4YjRkZDg1MjllOWRlMzM5ZGEwZSIsIm5iZiI6MTczMDc3MDk1Ni45OTI5MzE2LCJzdWIiOiI2NWRkMDYyZWRjYjZhMzAxODU4NGY4MWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y10pnZ9t61m2i08N6jXo-vit51zmV6W7nula3OmHP_8"
  }
}

const BASE_URL = "https://api.themoviedb.org/3"
const params = "&include_adult=false&language=en-US";

export const API_ENDPOINTS = {
  IMAGE_BACKDROP: `https://image.tmdb.org/t/p/w1280`,
  IMAGE_BACKDROP_SMALL: `https://image.tmdb.org/t/p/w500`,
  IMAGE_POSTER: `https://image.tmdb.org/t/p/w342`,
  GET_MOVIE_GENRES: `${BASE_URL}/genre/movie/list?${params}`,
  SEARCH_MOVIE: (query, page) => `${BASE_URL}/search/movie?query=${query}&page=${page}${params}`,
  GET_MOVIE_IMAGES: (movieData) => `${BASE_URL}/movie/${movieData.id}/images?language=en`,
  GET_MOVIE_DETAILS: (id) => `${BASE_URL}/movie/${id}?${params}`,
  GET_MOVIE_CREDITS: (id) => `${BASE_URL}/movie/${id}/credits?${params}`,
  GET_MOVIE_SIMILAR: (id) => `${BASE_URL}/movie/${id}/similar?${params}`,
  GET_MOVIE_RECOMMENDATION: (id) => `${BASE_URL}/movie/${id}/recommendations?${params}`,
  GET_COLLECTION: (id) => `${BASE_URL}/collection/${id}?${params}`,
  GET_POPULAR_MOVIES: (pageNumber) => `${BASE_URL}/movie/popular?page=${pageNumber}${params}`,
  GET_MOVIE_BY_GENRE: (genreID, page) => `${BASE_URL}/discover/movie?page=${page}&sort_by=popularity.desc&with_genres=${genreID}${params}`,
  
  GET_NOW_PLAYING_MOVIES: (pageNumber) => `${BASE_URL}/movie/now_playing?page=${pageNumber}${params}`,
  GET_TOP_RATED_MOVIES: (pageNumber) => `${BASE_URL}/movie/top_rated?page=${pageNumber}${params}`,
  GET_UPCOMING_MOVIES: `${BASE_URL}/movie/upcoming?${params}`,
  
  GET_SERIES_GENRES: `${BASE_URL}/genre/tv/list?${params}`,
  GET_SERIE_DETAILS: (id) => `${BASE_URL}/tv/${id}?${params}`,
  GET_SERIE_BY_GENRE: (genreID, page) => `${BASE_URL}/discover/tv?page=${page}&sort_by=popularity.desc&with_genres=${genreID}${params}`,
  GET_POPULAR_SERIES: (pageNumber) => `${BASE_URL}/tv/popular?page=${pageNumber}${params}`,
  GET_SERIE_CREDITS: (id) => `${BASE_URL}/tv/${id}/credits?${params}`,
  GET_SERIE_SIMILAR: (id) => `${BASE_URL}/tv/${id}/similar?${params}`,
  GET_SERIE_RECOMMENDATION: (id) => `${BASE_URL}/tv/${id}/recommendations?${params}`,
  GET_NOW_PLAYING_SERIES: `${BASE_URL}/tv/on_the_air?${params}`,
  GET_TOP_RATED_SERIES: (pageNumber) => `${BASE_URL}/tv/top_rated?page=${pageNumber}${params}`,
};

