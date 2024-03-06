// Api key = "d69ae57d4f26a7687d15f572102be872"
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  params: {
    include_adult: false,
    language: "en-US",
    page: 1,
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjlhZTU3ZDRmMjZhNzY4N2QxNWY1NzIxMDJiZTg3MiIsInN1YiI6IjY1ZTgyOWUxYTFhOWJhMDE4NWJlZGZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BtnqglRO0EKiTJKT6v3uISWsaaIcIFtwHHszL_mMmec",
  },
};

export async function fetchMovies() {
  const { data } = await axios.get("/trending/movie/day", options);
  return data.results;
}

export async function fetchMovie(id) {
  const { data } = await axios.get(`/movie/${id}`, options);
  console.log(data);
  return data;
}
