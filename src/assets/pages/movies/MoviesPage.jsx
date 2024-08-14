import { useEffect, useState } from "react";
import FetchMovies from "../../controllers/MovieController";
import { Grid } from "@mui/material";
import MultiActionAreaCard from "../../components/Card";
export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchMovies();
      setMovies(data);
      console.log(data);
    };
    fetchData();
  });
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px", padding: "2px" }}>
      {movies.map((movie) => {
        return (
          <Grid item xs={3} key={movie.id}>
            <MultiActionAreaCard item={movie} type="movie" />
          </Grid>
        );
      })}
    </Grid>
  );
}
