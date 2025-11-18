import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "./AboutUS/AboutUs";
import ErrorPage from "../pages/Error/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/AuthPges/Login/Login";
import Register from "../pages/AuthPges/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRout/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path:"rider",
        element:<PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path: "Send-Parcel",
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
