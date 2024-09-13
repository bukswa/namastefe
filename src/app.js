import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AboutPage } from "./about";
import { ErrorPage } from "./error-page";
import { Restaurant } from "./restaurant";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
      { path: "/contactus", element: <h1>Contact Us</h1> },
      { path: "restaurants/:resId", element: <Restaurant /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
