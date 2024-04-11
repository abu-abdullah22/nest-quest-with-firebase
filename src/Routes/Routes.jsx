import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import PrivateRoute from "../Pages/PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import Error from "../Pages/Error";
import FeedBack from "../Pages/FeedBack";
import Contact from "../Pages/Contact";
import TimeLine from "../Pages/TimeLine";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/update-profile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute> <EstateDetails></EstateDetails></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/user-profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/feedback',
        element:<PrivateRoute> <FeedBack></FeedBack></PrivateRoute>
      }, 
      {
        path: '/contact',
        element : <Contact></Contact>
      }, 
      {
        path: '/timeline',
        element: <TimeLine></TimeLine>
      }
    ]
  },
]);