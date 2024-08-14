import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MoviesPage } from "../pages/movies/MoviesPage";
import ActorsPage from "../pages/movies/ActorsPage";
import TVShowsPage from "../pages/movies/TVShowsPage";
import SeriesPage from "../pages/movies/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MoviesPage />,
  },
  {
    path: "/actors",
    element: <ActorsPage />,
  },
  {
    path: "/tv",
    element: <TVShowsPage />,
  },
  {
    path: "/series",
    element: <SeriesPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
