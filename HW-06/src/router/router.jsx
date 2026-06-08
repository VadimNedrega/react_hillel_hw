import { createBrowserRouter } from "react-router-dom";

import LoginRoute from "../routs/LoginRoute";
import RegisterRoute from "../routs/RegisterRoute";
import DashboardLayout from "../layouts/DashBoardLayout";
import MapRoute from "../routs/MapRoute";
import AnalyticsRoute from "../routs/AnalyticsRoute";
import FavoritesRoute from "../routs/FavoritesRoute";
import ProfileRoute from "../routs/ProfileRoute";
import LocationDetailsRoute from "../routs/LocationDetailsRoute";
import AuthLayout from "../layouts/AuthLayout";
import ErrorRoute from "../routs/ErrorRoute";

import { locationsService } from "../services/locations";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <ErrorRoute />,

        children: [
            {
                path: 'login',
                element: <LoginRoute />,
            },
            {
                path: 'register',
                element: <RegisterRoute />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                errorElement: <ErrorRoute />,

                children: [
                    {
                        path: "map",
                        element: <MapRoute />,
                        loader: async () => locationsService.getAll(),
                    },
                    {
                        path: 'analytics',
                        element: <AnalyticsRoute />,
                    },
                    {
                        path: 'favorites',
                        element: <FavoritesRoute />,
                    },
                    {
                        path: 'profile',
                        element: <ProfileRoute />,
                    },
                    {
                        path: "location/:id",
                        element: <LocationDetailsRoute />,
                        loader: async ({ params }) => locationsService.getById(params.id),
                    }
                ]
            },
        ]
    }
])