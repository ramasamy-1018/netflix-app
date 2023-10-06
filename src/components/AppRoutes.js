import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShowAllMovies from "./movies/ShowAllMovies"
import SelectedMovie from "./movies/SelectedMovie";
import ShowAllTvShows from "./tv/ShowAllTvShows"
import SelectedTvShow from "./tv/SelectedTvShow";
import WatchListPage from "./watchlist/WatchListPage";
import SearchPage from "./search/SearchPage";

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
  },
  {
    path: "/watchlist",
    element: <WatchListPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
