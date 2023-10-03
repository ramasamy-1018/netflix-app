import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SelectedMovie from "./SelectedMovie";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:param",
    element: <SelectedMovie />,
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
