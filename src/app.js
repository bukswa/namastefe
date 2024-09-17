import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AboutPage } from "./about";
import { ErrorPage } from "./error-page";
import UserContext from "./utils/UserContext";
// import { Restaurant } from "./restaurant";

const RestaurantLazy = lazy(() => import("./restaurant"));

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </UserContext.Provider>
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
      {
        path: "restaurants/:resId",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <RestaurantLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
