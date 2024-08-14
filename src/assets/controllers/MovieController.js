import axios from "axios";

//use axios to fetch movies
const apiUrl = "https://api.themoviedb.org/3/discover/movie";
const apiKey = "5e1c8e9e6b5a0b0e8b8b8b8b8b8b8b8b8b8b8b8";

export function FetchMovies() {
  try {
    const response = axios.get(`${apiUrl}/movies/popular?api__key=${apiKey}`);
    console.log("response", response);
    return response.data.results;
  } catch (error) {
    console.error("error", error);
  }
}

export function FetchActors() {
  try {
    const response = axios.get(`${apiUrl}/actors/popular?api__key=${apiKey}`);
    console.log("response", response);
    return response.data.results;
  } catch (error) {
    console.error("error", error);
  }
}

export function FetchTVshows() {
  try {
    const response = axios.get(`${apiUrl}/tv/top_rated?api__key=${apiKey}`);
    console.log("response", response);
    return response.data.results;
  } catch (error) {
    console.error("error", error);
  }
}

export function FetchSeries() {
  try {
    const response = axios.get(`${apiUrl}/series/popular?api__key=${apiKey}`);
    console.log("response", response);
    return response.data.results;
  } catch (error) {
    console.error("error", error);
  }
}
