import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
