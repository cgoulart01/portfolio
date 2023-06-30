import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "portfolio",
        element: <h1>teste</h1>,
      },
      {
        path: "contacts",
        element: <h1>contatos</h1>,
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
