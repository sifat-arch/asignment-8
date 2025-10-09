import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

import AppDetails from "../pages/AppDetils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "apps/:id",
        loader: () => fetch("/data.json"),
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
