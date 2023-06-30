import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import { MenuContextProvider } from "./context/MenuContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
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
    <MenuContextProvider>
      <RouterProvider router={router} />
    </MenuContextProvider>
  </React.StrictMode>
);
