import { useEffect, useState } from "react";
import FetchSeries from "../../controllers/MovieController";
import { Grid } from "@mui/material";
import MultiActionAreaCard from "../../components/Card";
function SeriesPage() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchSeries();
      setSeries(data);
      console.log(data);
    };
    fetchData();
  });
  return (
    <Grid container spacing={2} sx={{ marginTop: "10px", padding: "2px" }}>
      {series.map((movie) => {
        return (
          <Grid item xs={3} key={movie.id}>
            <MultiActionAreaCard item={movie} type="movie" />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default SeriesPage;
