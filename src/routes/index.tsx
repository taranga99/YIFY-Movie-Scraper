import { createBrowserRouter } from "react-router-dom";
import { AllMovie, ErrorPage } from "../components";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AllMovie />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
