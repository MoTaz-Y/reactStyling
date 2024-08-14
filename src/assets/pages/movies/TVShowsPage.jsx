import { useEffect, useState } from "react";
import FetchTVshows from "../../controllers/MovieController";
import { Grid } from "@mui/material";
import MultiActionAreaCard from "../../components/Card";
function TVShowsPage() {
  const [tvshows, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchTVshows();
      setMovies(data);
      console.log(data);
    };
    fetchData();
  });
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px", padding: "2px" }}>
      {tvshows.map((movie) => {
        return (
          <Grid item xs={3} key={movie.id}>
            <MultiActionAreaCard item={movie} type="movie" />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TVShowsPage;
