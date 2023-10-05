import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShowAllMovies from "./movies/ShowAllMovies"
import SelectedMovie from "./movies/SelectedMovie";
import ShowAllTvShows from "./tv/ShowAllTvShows"
import SelectedTvShow from "./tv/SelectedTvShow";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ShowAllMovies/>,
  },
  {
    path: "/movie/:param",
    element: <SelectedMovie />,
  },
  {
    path: "/tvshow",
    element: <ShowAllTvShows />,
  },
  {
    path: "/tvshow/:param",
    element: <SelectedTvShow />,
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
