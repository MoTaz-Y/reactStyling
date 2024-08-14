import { useEffect, useState } from "react";
import FetchActors from "../../controllers/MovieController";
import { Grid } from "@mui/material";
import MultiActionAreaCard from "../../components/Card";
function Moviesage() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchActors();
      setActors(data);
      console.log(data);
    };
    fetchData();
  });
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px", padding: "2px" }}>
      {actors.map((movie) => {
        return (
          <Grid item xs={3} key={movie.id}>
            <MultiActionAreaCard item={movie} type="movie" />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Moviesage;
