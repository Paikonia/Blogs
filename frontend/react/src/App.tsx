import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Blogs, { BlogsLoader } from "./Pages/Blogs/Index";
import Blog from "./Pages/Blogs/Blog";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      path: '/',
      children: [
        {
          element: <Home />,
          index: true
        },
        {
          element: <Blogs />,
          path: 'blog',
          loader: BlogsLoader
        },
        {
          element: <Blog />,
          path: 'blog/:id',
          loader: BlogsLoader
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
};

export default App;
