import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Jobs from "./pages/Jobs.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import SignupPage from "./pages/SignUpPage.jsx";
import Profile from "./pages/Profile.jsx";
import PersonalInfo from "./components/profile/PersonalInfo.jsx";
import EducationInfo from "./components/profile/EducationInfo.jsx";
import Employment from "./components/profile/Employment.jsx";

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
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <PersonalInfo />
          },
          {
            path: "/profile/education",
            element: <EducationInfo />,
          },
          {
            path: "/profile/employment",
            element: <Employment />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
