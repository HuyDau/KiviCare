import { createBrowserRouter, Navigate } from "react-router-dom";
import { IndexRouter } from "@/router/indexRouter";

export const router = createBrowserRouter(
  [
    ...IndexRouter,
    {
      path: "*",
      element: <Navigate to="/auth/login" replace />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL || "/",
  }
);
