import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
          path : '/',
          element :<Home></Home>,
          loader : () => fetch('/data.json')
        },
        {
          path: '/update-profile',
          element : <UpdateProfile></UpdateProfile>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path: "/register",
          element : <Register></Register>
        },
        {
          path: '/estate/:id',
          element: <EstateDetails></EstateDetails>,
          loader : () => fetch('/data.json')
        }
      ]
    },
  ]);