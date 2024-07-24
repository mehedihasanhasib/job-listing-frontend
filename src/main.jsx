import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "/src/assets/css/bootstrap.min.css";
import "/src/assets/css/style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Jobs from "./pages/Jobs.jsx";
import Contacts from "./pages/Contacts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contacts />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
