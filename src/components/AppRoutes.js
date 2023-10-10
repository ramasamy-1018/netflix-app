import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import ShowAllMovies from "./movies/ShowAllMovies";
import WatchListPage from "./watchlist/WatchListPage";
import SearchPage from "./search/SearchPage";
import Profile from "./Profile";
import Shimmer from "../utils/Shimmer";
import ErrorPage from "./ErrorPage";

const SelectedMovie = lazy(() => import("./movies/SelectedMovie"));
const ShowAllTvShows = lazy(() => import("./tv/ShowAllTvShows"));
const SelectedTvShow = lazy(() => import("./tv/SelectedTvShow"));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie",
    element: <ShowAllMovies />,
  },
  {
    path: "/movie/:param",
    element: (
      <Suspense fallback={<Shimmer />}>
        <SelectedMovie />
      </Suspense>
    ),
  },
  {
    path: "/tvshow",
    element: (
      <Suspense fallback={<Shimmer />}>
        <ShowAllTvShows />
      </Suspense>
    ),
  },
  {
    path: "/tvshow/:param",
    element: (
      <Suspense fallback={<Shimmer />}>
        <SelectedTvShow />
      </Suspense>
    )
  },
  {
    path: "/watchlist",
    element: <WatchListPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
