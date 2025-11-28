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
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccessFull from "../pages/Dashboard/Payment/PaymentSuccessFull";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute/AdminRoute";
import ApproveRiders from "../pages/Dashboard/approveRiders/approveRiders";
import AssignRiders from "../pages/Dashboard/AssignRiders/assignRiders";
import RidersRoute from "./RidersRoutes/RidersRoute";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";

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
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "parcelTrack/:trackingId",
        Component:ParcelTrack,
      },
      {
        path: "Send-Parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
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

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "payment-success",
        Component: PaymentSuccessFull,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancelled,
      },
      // admin related routes
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders></ApproveRiders>
          </AdminRoute>
        ),
      },

      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement></UsersManagement>
          </AdminRoute>
        ),
      },
      {
        path: "assign-riders",
        element: <AssignRiders></AssignRiders>,
      },
      //  riders related only routes
      {
        path: "assign-Deliveries",
        element: (
          <RidersRoute>
            <AssignDeliveries></AssignDeliveries>
          </RidersRoute>
        ),
      },
      {
        path: "completed-Deliveries",
        element: (
          <RidersRoute>
            <CompletedDeliveries></CompletedDeliveries>
          </RidersRoute>
        ),
      },
    ],
  },
]);
