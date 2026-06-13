import { createBrowserRouter } from "react-router-dom";

import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";
import DashboardLayout from "../layouts/DashBoardLayout";
import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";
import AuthLayout from "../layouts/AuthLayout";
import ErrorRoute from "../routes/ErrorRoute";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import HomeRoute from "../routes/HomeRoute";

import { locationsService } from "../services/locations";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeRoute />,
        errorElement: <ErrorRoute />
    },
    {
        element: <PublicRoute />,
        errorElement: <ErrorRoute />,

        children: [
            {
                path: 'login',
                element: <LoginRoute />,
            },
            {
                path: 'register',
                element: <RegisterRoute />,
            }
        ],
    },
    {
        path: 'dashboard',
        element: <ProtectedRoute />,
        errorElement: <ErrorRoute />,

        children: [
            {
                element: <DashboardLayout />,
                children: [
                    { path: "map", element: <MapRoute /> },
                    { path: "analytics", element: <AnalyticsRoute /> },
                    { path: "favorites", element: <FavoritesRoute /> },
                    { path: "profile", element: <ProfileRoute /> },
                    { path: "location/:id", element: <LocationDetailsRoute /> }
                ]
            }
        ]
    }
])